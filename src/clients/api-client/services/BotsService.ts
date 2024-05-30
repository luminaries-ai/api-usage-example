/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bot } from '../models/Bot.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class BotsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the bots available for the organization identified by your token
     * @returns Bot test
     * @throws ApiError
     */
    public getOrganizationBots(): CancelablePromise<Array<Bot>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/bots',
        });
    }
}
