import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: (headers, {getState}) => {
        const token = getState().appVariablesReducer.userToken
        if (token) headers.set("Authorization", `Bearer ${token}`)
        return headers
    },
    timeout: 30000
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3})

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: baseQueryWithRetry,
    refetchOnReconnect: true,
    refetchOnFocus: true,
    endpoints: () => ({}),
    tagTypes: []
})