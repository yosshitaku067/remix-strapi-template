/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentListResponseDataItem } from './CommentListResponseDataItem';
export type CommentListResponse = {
    data?: Array<CommentListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

