/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContentExtractionJob = {
    contentId: string;
    createdAt: string;
    id: string;
    status: ContentExtractionJob.status;
    updatedAt: string;
    organizationId: string;
};
export namespace ContentExtractionJob {
    export enum status {
        PENDING = 'pending',
        PROCESSING = 'processing',
        DONE = 'done',
        FAILED = 'failed',
        COMPLETE = 'complete',
    }
}

