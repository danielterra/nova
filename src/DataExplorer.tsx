import React, {useState, useEffect} from "react";
import { openDB, IDBPDatabase } from 'idb';
import { OrionColumn } from "BaseStyles";

import { DataRecord } from 'DataRecord';

const schema = {
    title: {
        type: "short-text",
        label: "title",
        isTitle: true
    },
    description: {
        type: "short-text",
        label: "description"
    },
    version: {
        type: "short-text",
        label: "version"
    },
    entities: {
        type: "json",
        label: "Entities"
    },
    transactions: {
        type: "json",
        section: "logs"
    }
}

interface DatabaseTransaction {
    id: string;
    collection: string;
    operation: string;
    value: any;
    startedAt: Date;
    index?: string;
    completed?: boolean;
    endedAt?: Date;
    error: string;
}

export const DataExplorer = () => {
    const [indexedDbData, setIndexedDbData] = useState<any>(
        {
            title: "Data Explorer",
            description: "This represent the database showing the entities and operations logs"
        }
    );
    const [db, setDb] = useState<IDBPDatabase>();
    const [transactions, setTransactions] = useState<DatabaseTransaction[]>([]);
    
    // Create connection with indexedDB
    const initDB = async () => {
        const dbref:IDBPDatabase = await openDB('NOVA', 2, {
            upgrade: (upgradeDB:IDBPDatabase) => {
                if (!upgradeDB.objectStoreNames.contains('ontology')) {
                    upgradeDB.createObjectStore('ontology',{keyPath: "name"});
                }
                if (!upgradeDB.objectStoreNames.contains('dbTransactions')) {
                    const dbTransactions = upgradeDB.createObjectStore('dbTransactions',{keyPath: "id"});
                    dbTransactions.createIndex('recentBased', 'startedAt');
                }
            },
            blocked: () => {
                console.error(" Called if there are older versions of the database open on the origin, so this version cannot open. This is similar to the blocked event in plain IndexedDB");
            },
            blocking: () => {
                console.error("Called if this connection is blocking a future version of the database from opening. This is similar to the versionchange event in plain IndexedDB.");
            },
            terminated: () => {
                console.error("Called if the browser abnormally terminates the connection, but not on regular closures like calling db.close(). This is similar to the close event in plain IndexedDB.");
            }
        });

        setDb(dbref);
    }

    // Generate a random key like mongo
    const guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    // Database connection changed
    useEffect(() => {
        if (!db) {
            return;
        }
        const entities = Object.values(db.objectStoreNames).map((val) => { return {name: val}});

        setIndexedDbData({
            ...indexedDbData,
            entities,
            version: db.version
        });

        updateRenderedTransactionsList();
        processPendingTransaction();
    },[db]);

    // Initialization
    useEffect(() => {
        initDB();
    },[]);

    const processPendingTransaction = async () => {
        if (!db) {
            return;
        }

        const dbTransactions:DatabaseTransaction[] = await db.getAll("dbTransactions");
        console.log(dbTransactions);
        const pendingTransaction = dbTransactions.filter(t => !t.completed).pop();
        console.log(pendingTransaction);
        
        if (!pendingTransaction) {
            return;
        }

        switch (pendingTransaction.operation) {
            case "add":
                try {
                    await db.add(pendingTransaction.collection, pendingTransaction.value);
                } catch(err:any) {
                    pendingTransaction.error = err.toString();
                }
                pendingTransaction.completed = true;
                pendingTransaction.endedAt = new Date();
                await db.put("dbTransactions",pendingTransaction);
                break;
        
            default:
                break;
        }

        updateRenderedTransactionsList();
    }

    const updateRenderedTransactionsList = async () => {
        if (!db) {
            return;
        }
        // Get all transactions in memory, sort and limit to 10 most recent results
        const transactions:DatabaseTransaction[] = await (await db.getAll("dbTransactions")).sort((a:DatabaseTransaction, b:DatabaseTransaction) => {
            if (a.startedAt < b.startedAt) {
                return 1;
            }
            if (a.startedAt > b.startedAt) {
                return -1;
            }
            return 0;
        }).slice(0,10);
        
        // update the screen state
        setTransactions(transactions);
    }

    const test = async () => {
        if (!db) {
            return;
        }

        await db.add("dbTransactions", 
            {
                id: guid(),
                collection: "ontology",
                operation: "add",
                value: {
                    name: "person"
                },
                completed: false,
                startedAt: new Date()
            }
        );

        await updateRenderedTransactionsList();
        processPendingTransaction();
    }

    return (
        <OrionColumn>
            <button onClick={test}>teste</button>
            <DataRecord data={{...indexedDbData, transactions}} schema={schema} entity="Database Component"/>
        </OrionColumn>
    )
}