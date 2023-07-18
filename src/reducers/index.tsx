import {combineReducers} from "redux";
import postsReducer from "./postsReducers";
import booksReducer from "./booksReducers";

const rootReducer = combineReducers({
    postsList: postsReducer,
    booksList: booksReducer
})

export default rootReducer;