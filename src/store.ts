import {configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReducers";
import {reducer as booksReducer} from "./reducers/booksReducers";
import {postsApi} from "./Api";


const store = configureStore({
    reducer: {
        postsReducer: postsReducer,
        booksReducer: booksReducer,
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})


const subscribe = store.subscribe(() =>
    console.log(store.getState())
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// subscribe();

export default store;