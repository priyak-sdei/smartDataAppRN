import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';

const createBaseQuery = () => {
    return fetchBaseQuery({
        baseUrl: 'https://sdeiaiml.com:7004/',
        timeout: 10000,
        prepareHeaders: async (headers, {getState, endpoint}) => {
            const _state = getState() as RootState;
            // const token = (state as any)?.auth?.user?.token;
            // console.log('tokennnnn=====>>', token);
            // if (token) {
            //     headers.set('Authorization', `Bearer ${token}`);
            // }
            return headers;
        },
    });
};

export {createBaseQuery};
