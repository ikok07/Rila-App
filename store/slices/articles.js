import {backendApi} from "../backendApi";

const articles = backendApi.injectEndpoints({
    endpoints: builder => ({
        getAllSections: builder.query({
            query: () => "articles/sections",
            providesTags: ["ArticleSections"],
            transformResponse(response) {
                return response.data
            }
        }),
        getArticleById: builder.query({
            query: articleId => `articles/${articleId}`,
            providesTags: ["Article"],
            transformResponse(response) {
                return response.data
            }
        })
    })
})

export const {useGetAllSectionsQuery, useGetArticleByIdQuery} = articles