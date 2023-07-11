import React from 'react';
import initialState from "./initialState";

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_POSTS": {
            return {
                ...state,
                postsList: [...state.postsList.concat(action.payload.postsList)]
            }
        }
        case "REMOVE_POST": {
            return {
                ...state,
                postsList: [...state.postsList.filter((element) => action.payload.postId !== element.id)]
            }
        }
        default:
            return state;
    }
}

