export const addPosts = (posts) => {
    return {
        type: "ADD_POSTS",
        payload: {postsList: posts}
    }
}
export const removePost = (postId) => {
    return {
        type: "REMOVE_POST",
        payload: {postId: postId}
    }
}
