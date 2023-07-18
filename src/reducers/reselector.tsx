import { createSelector } from "reselect";

export const getCardsStore = createSelector(
    (store) => store,
    (store) => store.postsReducer
)

export const getPostsListStore = createSelector(
    getCardsStore,
    (posts) => posts.postsList
)

export const getBooksList = createSelector(
    (store) => store,
    (store) => store.booksReducer
)

export const getBooksListStore = createSelector(
    getBooksList,
    (books) => books.booksList
)