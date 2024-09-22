/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SightseeingSpotListResponseDataItem } from './SightseeingSpotListResponseDataItem';
export type SightseeingSpotListResponse = {
    data?: Array<SightseeingSpotListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

