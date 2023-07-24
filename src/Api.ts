import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {addBooks, booksList, singleBook} from "./reducers/booksReducers";
import {addPosts, postsList} from "./reducers/postsReducers";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['PostsList'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getPosts: builder.query<postsList, void>({
            query() {
                return {
                    url: '/',
                    method: 'GET',
                }
            },
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(addPosts(data));
                } catch (error) {
                    console.error(error);
                }
            }
        },
    )})
});

export const { useGetPostsQuery } = postsApi;