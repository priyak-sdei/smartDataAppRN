import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
} from '@reduxjs/toolkit/query/react';

import {EndpointBuilder, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {createBaseQuery} from '.';

export type RTKBuilderType = EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
    string,
    'api'
>;

export const clientApi = createApi({
    reducerPath: 'api',
    // baseQuery: createBaseQuery(),
    baseQuery: fetchBaseQuery({baseUrl: 'http://54.190.192.105:9185/angel/'}),
    endpoints: () => ({}),
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: 5,
});
