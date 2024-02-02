/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContentCreate = {
    bucket: string;
    path: string;
    type: (string | 'video' | 'audio' | 'deepgram-transcript');
    name: string;
    contentGroupId: string;
    contentType: string;
    description: string;
    organizationId: string;
    recencyDate: string | null;
    updatedAt: string | null;
};

