import { createSelector } from "reselect";
import {RootState} from "../store";

export const getCardsStore = createSelector(
    (store:RootState) => store,
    (store) => store.postsReducer
)

export const getPostsListStore = createSelector(
    getCardsStore,
    (posts) => posts.postsList
)

export const getPostsListStoreLength = createSelector(
    getCardsStore,
    (posts) => posts.postsList.length
)

export const getBooksList = createSelector(
    (store:RootState) => store,
    (store) => store.booksReducer
)

export const getBooksListStore = createSelector(
    getBooksList,
    (books) => books.booksList
)

export const getFilteredBooksListStore = createSelector(
    getBooksList,
    (books) => books.filteredBooksList
)

export const getSortByPriceStatus = createSelector(
    getBooksList,
    (books) => books.isSortAsc
)

export const getBooksListStoreTotalPrice = createSelector(
    getBooksList,
    (books) => books.booksCheckedValue
)