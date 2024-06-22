import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://geocode.maps.co/",
    timeout: 30000
})

const baseQueryWithRetry = retry(
    baseQuery,
    {maxRetries: 3,}
)

export const geocodingApi = createApi({
    reducerPath: "geocodingApi",
    baseQuery: baseQueryWithRetry,
    refetchOnReconnect: true,
    endpoints: builder => ({
        getLocationData: builder.query({
            query: city => `search?api_key=6677027f4e830537127162mks530fea&q=${city}`,
            providesTags: ["Locations"]
        })
    }),
    tagTypes: ["Locations"]
})

export const {useGetLocationDataQuery} = geocodingApi