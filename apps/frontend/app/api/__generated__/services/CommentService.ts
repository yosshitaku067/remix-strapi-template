/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentListResponse } from '../models/CommentListResponse';
import type { CommentRequest } from '../models/CommentRequest';
import type { CommentResponse } from '../models/CommentResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param sort Sort by attributes ascending (asc) or descending (desc)
     * @param paginationWithCount Return page/pageSize (default: true)
     * @param paginationPage Page number (default: 0)
     * @param paginationPageSize Page size (default: 25)
     * @param paginationStart Offset value (default: 0)
     * @param paginationLimit Number of entities to return (default: 25)
     * @param fields Fields to return (ex: title,author)
     * @param populate Relations to return
     * @param filters Filters to apply
     * @param locale Locale to apply
     * @returns CommentListResponse OK
     * @throws ApiError
     */
    public getComments(
        sort?: string,
        paginationWithCount?: boolean,
        paginationPage?: number,
        paginationPageSize?: number,
        paginationStart?: number,
        paginationLimit?: number,
        fields?: string,
        populate?: string,
        filters?: Record<string, any>,
        locale?: string,
    ): CancelablePromise<CommentListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comments',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns CommentResponse OK
     * @throws ApiError
     */
    public postComments(
        requestBody: CommentRequest,
    ): CancelablePromise<CommentResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comments',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns CommentResponse OK
     * @throws ApiError
     */
    public getCommentsId(
        id: number,
    ): CancelablePromise<CommentResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns CommentResponse OK
     * @throws ApiError
     */
    public putCommentsId(
        id: number,
        requestBody: CommentRequest,
    ): CancelablePromise<CommentResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns number OK
     * @throws ApiError
     */
    public deleteCommentsId(
        id: number,
    ): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comments/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
}
