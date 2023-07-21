import React from 'react';
import Sort from "./Sort";
import BooksList from "./booksList";
import TotalCount from "./totalCount";

const Books = () => {
    return (
        <div className='booksContainer'>
            <h1>Books</h1>
            <Sort></Sort>
            <BooksList></BooksList>
            <TotalCount></TotalCount>
        </div>
    );
};

export default Books;