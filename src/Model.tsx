export interface DRField {
    label: string;
    content: string;
}

export interface DRSection {
    title: string;
    fields: DRField[];
}

export interface DataRecordModel {
    title: string;
    sections: DRSection[];
}