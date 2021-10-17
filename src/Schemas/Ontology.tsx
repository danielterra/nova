interface nData {
    createdAt: Date;
    updatedAt: Date;
    source: any;
}

export interface nProperty {
    id: string;
    label: string;
    fieldType: string;
    section?: string;
    options?: any;
}

export interface nRelation {
    id: string;
    label: string;
    targetName: string;
    section?: string;
    multiple: boolean;
}

export interface nOntology extends nData {
    name: string;
    properties?: nProperty[];
    relations?: nRelation[];
}

export const person:nOntology = {
    name: "Person",
    createdAt: new Date("2021/10/11 20:34"),
    updatedAt: new Date("2021/10/11 20:34"),
    source: "Me",
    properties: [
        {
            id: "name",
            label: "Name",
            fieldType: "short-text"
        },
        {
            id: "lastname",
            label: "Lastname",
            fieldType: "short-text"
        },
        {
            id: "photo",
            label: "Photo",
            fieldType: "image"
        }
    ]
};

export const project:nOntology = {
    name: "Project",
    createdAt: new Date("2021/10/11 19:40"),
    updatedAt: new Date("2021/10/11 20:52"),
    source: "Me",
    properties: [
        {
            id: "title",
            label: "Title",
            fieldType: "short-text"
        },
        {
            id: "overview",
            label: "Overview",
            fieldType: "long-text"
        },
        {
            id: "repository",
            label: "Repository",
            fieldType: "url"
        },
        {
            id: "telegram_group",
            label: "Our telegram group",
            fieldType: "url"
        }
    ],
    relations: [
        {
            id: "responsable",
            label: "Responsable",
            targetName: "Person",
            section: "RACI",
            multiple: false
        },
        {
            id: "actionable",
            label: "Actionable",
            targetName: "Person",
            section: "RACI",
            multiple: true
        },
        {
            id: "consulted",
            label: "Consulted",
            targetName: "Person",
            section: "RACI",
            multiple: true
        },
        {
            id: "informed",
            label: "Informed",
            targetName: "Person",
            section: "RACI",
            multiple: true
        }
    ]
};

export const baseOntology = [
    project,
    person
];