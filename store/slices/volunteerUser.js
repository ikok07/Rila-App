import {createApi} from "@reduxjs/toolkit/query/react";
import {backendApi} from "../backendApi";


const volunteerUserApi = backendApi.injectEndpoints({
    endpoints: builder => ({
        getVolunteer: builder.query({
            query: () => "volunteer",
            providesTags: ["VolunteerUser"],
            transformResponse: response => response.data
        }),
        createVolunteer: builder.mutation({
            query: body => ({
                url: "volunteer",
                method: "POST",
                body: {...body}
            }),
            invalidatesTags: ["VolunteerUser"]
        }),
        getVolunteerEvents: builder.query({
            query: () => "volunteer/events",
            providesTags: ["VolunteerEvents"],
            transformResponse: response => response.data
        }),
    })
})

export const { useGetVolunteerQuery, useCreateVolunteerMutation, useGetVolunteerEventsQuery } = volunteerUserApi