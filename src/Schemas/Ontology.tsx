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
}

export interface nRelation {
    id: string;
    label: string;
    targetName: string;
}

export interface nOntology extends nData {
    name: string;
    properties?: nProperty[];
    relations?: nRelation[];
}

export const project:nOntology = {
    name: "Project",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    ]
}