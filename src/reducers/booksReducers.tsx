import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

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
    filteredBooksList: [],
    booksCheckedValue: 0,
    isSortAsc: true,
}

function sortByField(field, asc) {
    if(asc) {
        return (a, b) => a[field] > b[field] ? 1 : -1

    } else {
        return (a, b) => a[field] > b[field] ? -1 : 1
    }
}

Array.prototype.diff = function(a) {
    return this.filter(function(i){return a.indexOf(i) < 0;});
};


export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks(state, {payload: books}:object){
           state.booksList = state.booksList.concat(books)
        },
        changeBooksStatus(state, {payload: book}:object){
            !book.checked ? state.booksCheckedValue += book.price : state.booksCheckedValue -= book.price;

            state.booksList = state.booksList.map((bookbook => {
                if(bookbook.id === book.id) {
                    return {...bookbook, checked: !book.checked}
                } else {
                    return bookbook;
                }
            }))
        },
        filterBooksByPrice(state) {
            if(state.isSortAsc){
                state.isSortAsc = false;
                state.booksList.sort(sortByField('price', 1))
            } else {
                state.isSortAsc = true;
                state.booksList.sort(sortByField('price', 0))
            }
        },
        filterBooksByGroup(state, {payload: type}) {
            console.log(type)
            if(type !== 'every') {
                state.booksList = state.booksList.concat(state.filteredBooksList);
                const filteredBooks = state.booksList.filter( book => {
                    return book.category.toLowerCase().includes(type.toLowerCase())
                })
                state.filteredBooksList = state.booksList.diff(filteredBooks);
                state.booksList = filteredBooks;
            } else {
                state.booksList = state.booksList.concat(state.filteredBooksList)
                state.filteredBooksList = [];
            }
        },
    },
})


export const { reducer } = booksSlice
export const { addBooks, changeBooksStatus, filterBooksByPrice, filterBooksByGroup } = booksSlice.actions


// export default function booksReducer(state = initialState, action) {
//     switch(action.type) {
//         case "CHANGE_BOOK_STATE": {
//             return {
//                 ...state,
//             }
//         }
//         case "ADD_BOOKS": {
//             return {
//                 booksList: [...state.booksList.concat(action.payload.booksList)]
//             }
//         }
//         default:
//             return state;
//     }
// }
//
