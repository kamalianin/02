import React from 'react';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type booksState = {
    booksList: booksList,
    filteredBooksList: booksList,
    booksCheckedValue: number,
    isSortAsc: boolean,
}

export type booksList = Array<singleBook>

export type singleBook = {
    key?: number,
    id: number,
    name: string,
    category: string,
    price: number,
    checked?: boolean
}

let booksListInitial: booksList = []

const initialState:booksState = {
    booksList: booksListInitial,
    filteredBooksList: [],
    booksCheckedValue: 0,
    isSortAsc: true,
}

function sortByField(field:string, asc:number) {
    if(asc) {
        return (a:any, b:any) => a[field] > b[field] ? 1 : -1
    } else {
        return (a:any, b:any) => a[field] > b[field] ? -1 : 1
    }
}

const diff = function(a:Array<any>, b:Array<any>):Array<any> {
    return a.filter(function(i){return b.indexOf(i) < 0;});
};


export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks(state, action:PayloadAction<booksList>){
           state.booksList = state.booksList.concat(action.payload)
        },
        changeBooksStatus(state, action:PayloadAction<singleBook>) {
            !action.payload.checked ? state.booksCheckedValue += action.payload.price : state.booksCheckedValue -= action.payload.price;

            state.booksList = state.booksList.map((bookbook => {
                if(bookbook.id === action.payload.id) {
                    return {...bookbook, checked: !action.payload.checked}
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
            if(type !== 'every') {
                state.booksList = state.booksList.concat(state.filteredBooksList);
                const filteredBooks = state.booksList.filter( book => {
                    return book.category.toLowerCase().includes(type.toLowerCase())
                })
                state.filteredBooksList = diff(state.booksList, filteredBooks);
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
