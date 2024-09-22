/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryListResponseDataItem } from './CategoryListResponseDataItem';
export type CategoryListResponse = {
    data?: Array<CategoryListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

