/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PersonRecordSchema = {
    createdAt: string;
    id: string;
    description: string;
    name: string;
    organizationId: string;
    schema: {
        schema: {
            type: PersonRecordSchema.type;
            fields: Record<string, {
                type: 'field';
                fieldType: ('string' | 'number' | 'date' | 'boolean' | Array<string>);
                description?: string;
                optional?: boolean;
            }>;
            description?: string;
            optional?: boolean;
        };
        unique_id: Array<string>;
    };
};
export namespace PersonRecordSchema {
    export enum type {
        OBJECT = 'object',
    }
}

