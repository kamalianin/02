import {configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReducers";
import {reducer as booksReducer} from "./reducers/booksReducers";


const store = configureStore({
    reducer: {
        postsReducer: postsReducer,
        booksReducer: booksReducer
    }
})

const subscribe = store.subscribe(() =>
    console.log(store.getState())
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// subscribe();

export default store;