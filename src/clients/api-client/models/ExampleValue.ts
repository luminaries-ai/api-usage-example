/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * describe values, calculations and references as json schema
 */
export type ExampleValue = ((string | number | boolean | null | Record<string, any>) | {
    type?: string;
} | Record<string, ({
    type?: 'input';
    fieldReference?: Array<(string | number | 'first' | 'last' | {
        selector?: '';
    })>;
} | {
    type?: 'output';
})>);

