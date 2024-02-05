/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContentExtractionJob = {
    id: string;
    organizationId: string;
    contentId: string;
    createdAt: string;
    updatedAt: string;
    status: ContentExtractionJob.status;
};
export namespace ContentExtractionJob {
    export enum status {
        PENDING = 'pending',
        PROCESSING = 'processing',
        COMPLETE = 'complete',
        FAILED = 'failed',
        DONE = 'done',
    }
}

