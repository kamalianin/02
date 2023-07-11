import { createSelector } from "reselect";

export const getCardsStore = createSelector(
    (store) => store,
    (store) => store.posts
)

export const getPostsListStore = createSelector(
    getCardsStore,
    (posts) => posts.postsList
)