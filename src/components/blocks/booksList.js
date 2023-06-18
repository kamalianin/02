import React, { useState } from 'react';
// import axios from "axios";
import BookElement from "./BookElement";


const BooksList = ({booksData, bookElClick}) => {

    return (
        <div className='booksElContainer'>
            {booksData.map((book) => (
                <BookElement key={book.id} book={book} onClick={bookElClick}></BookElement>
            ))}
        </div>
    );
};

export default BooksList;