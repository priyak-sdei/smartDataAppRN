import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
} from '@reduxjs/toolkit/query/react';

import {EndpointBuilder} from '@reduxjs/toolkit/query';
import {createBaseQuery} from '.';

export type RTKBuilderType = EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
    string,
    'api'
>;

export const clientApi = createApi({
    reducerPath: 'api',
    baseQuery: createBaseQuery(),
    endpoints: () => ({}),
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: 5,
});
