import {configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReducers";
import booksReducer from "./reducers/booksReducers";


const store = configureStore({
    reducer: {
        postsReducer: postsReducer,
        booksReducer: booksReducer
    }
})

// const subscribe = store.subscribe(() =>
//     console.log(store.getState())
// )

subscribe();

export default store;