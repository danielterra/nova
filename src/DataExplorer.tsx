import React, {useState, useEffect} from "react";
import { openDB, IDBPDatabase } from 'idb';
import { OrionColumn } from "BaseStyles";
import { Graph } from "Graph";

import { DataRecord } from 'DataRecord';
import { IGraphViewProps } from "react-digraph";
import { nOntology, project } from "Schemas/Ontology";

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

const GraphConfig:IGraphViewProps =  {
    nodeKey: "id",
    edges: [],
    nodes: [],
    nodeTypes: {
      empty: { // required to show empty nodes
        typeText: "None",
        shapeId: "#empty", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 100 100" id="empty" key="0">
            <circle cx="50" cy="50" r="45"></circle>
          </symbol>
        )
      },
      hex: {
        typeText: "Entity",
        shapeId: "#hex",
        shape: (
          <symbol viewBox="0 0 100 100" id="hex" key="0">
            <polygon points="100,50 75,93 25,93 0,50 25,7 75,7"></polygon>
          </symbol>
        )
      }
    },
    nodeSubtypes: {},
    edgeTypes: {
      emptyEdge: {  // required to show empty edges
        shapeId: "#emptyEdge",
        shape: (
          <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
            <circle cx="25" cy="25" r="8" fill="currentColor"> </circle>
          </symbol>
        )
      }
    }
}

interface GraphNode {
    id: number;
    title: string;
    x?: number;
    y?: number;
    type: string;
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
    const [nodes, setNodes] = useState<GraphNode[]>([]);
    const [edges, setEdges] = useState<any[]>([]);
    
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

    const updateOntologyView = async () => {
        if (!db) {
            return;
        }

        db.getAll("ontology")
            .then((resp:nOntology[]) => {
                // Fill graph
                const newNodes:GraphNode[] = [];
                resp.forEach((n, i) => {
                    newNodes.push({
                        id: i,
                        title: n.name,
                        type: "hex"
                    });
                });

                setNodes(newNodes);
            });
    }

    // Database connection changed
    useEffect(() => {
        if (!db) {
            return;
        }

        setIndexedDbData({
            ...indexedDbData,
            version: db.version
        });

        updateOntologyView();
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
        const pendingTransaction = dbTransactions.filter(t => !t.completed).pop();
        
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
                value: project,
                completed: false,
                startedAt: new Date()
            }
        );

        await updateRenderedTransactionsList();
        processPendingTransaction();
    }

    console.log(nodes);

    return (
        <OrionColumn>
            <button onClick={test}>teste</button>
            <DataRecord data={{...indexedDbData, transactions}} schema={schema} entity="Database Component"/>
            <Graph
                {...GraphConfig}
                nodes={nodes}
                edges={edges}
            />
        </OrionColumn>
    )
}