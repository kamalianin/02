import React from 'react';
import {createAction, createReducer} from "@reduxjs/toolkit";

export type booksList = Array<singleBook>

type singleBook = {
    key: number,
    id: number,
    name: string,
    category: string,
    price: number
}

let booksListInitial: booksList = []

const initialState = {
    booksList: booksListInitial,
}


// export const addBooks = createAction<{bookList:bookList}>('ADD_POSTS')
// export const removePost = createAction<{postId:number}>('REMOVE_POST');
//
// const postsReducer = createReducer(initialState,
//     (builder) => {
//         builder
//             .addCase(addPosts, (state, action) => {
//                 state.postsList = state.postsList.concat(action.payload.postsList)
//             })
//             .addCase(removePost, (state, action) => {
//                 console.log(action.payload)
//                 state.postsList =  state.postsList.filter((element) => action.payload.postId !== element.id)
//             })
//             .addDefaultCase((state, action) => {})
//     }
// )




export default function booksReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_BOOK_STATE": {
            return {
                ...state,
            }
        }
        case "ADD_BOOKS": {
            return {
                booksList: [...state.booksList.concat(action.payload.booksList)]
            }
        }
        default:
            return state;
    }
}

