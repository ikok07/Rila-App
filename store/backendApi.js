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

const baseQueryWithRetry = retry(
    baseQuery,
    {
        maxRetries: 3,
        retryCondition: (
            error,
            action,
            retries
        ) => {

            if (error.data && error.data.identifier === "NotFound") {
                return false
            }
            if (retries.attempt < 3) return true
        }
    }
)

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: baseQueryWithRetry,
    refetchOnReconnect: true,
    refetchOnFocus: true,
    endpoints: () => ({}),
    tagTypes: ["VolunteerUser", "VolunteerEvents", "ArticleSections", "Article"]
})