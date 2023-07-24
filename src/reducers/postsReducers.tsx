import React from 'react';
import { createAction, createReducer } from '@reduxjs/toolkit'

export type postsList = Array<singlePost>

export type singlePost = {
    key: number,
    userId: number,
    id: number,
    title: string,
    body: string
}

let postsListInitial:postsList = []


const initialState = {
    postsList: postsListInitial,
}

export const addPosts = createAction<postsList>('ADD_POSTS')
export const removePost = createAction<number>('REMOVE_POST');

const postsReducer = createReducer(initialState,
    (builder) => {
    builder
        .addCase(addPosts, (state, action) => {
            state.postsList = state.postsList.concat(action.payload)
        })
        .addCase(removePost, (state, action) => {
            console.log(action.payload)
            state.postsList =  state.postsList.filter((element) => action.payload !== element.id)
        })
        .addDefaultCase((state, action) => {})
    }
)

export default postsReducer;

// {
//     switch(action.type) {
//         case "ADD_POSTS": {
//             console.log(state)
//             return {
//                 ...state,
//                 postsList: [state.concat(action.payload)]
//             }
//         }
//         case "REMOVE_POST": {
//             return {
//                 ...state,
//                 postsList: [state.filter((element) => action.payload.postId !== element.id)]
//             }
//         }
//         default:
//             return state;
//     }
// }
//
