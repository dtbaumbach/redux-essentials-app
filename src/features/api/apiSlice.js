import { createApi, fetchedBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSLice = createApi({
    reducerPath: 'api',
    baseQuery: fetchedBaseQuery({ baseUrl: '/fakeApi' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})

export const { useGetPostsQuery } = apiSLice