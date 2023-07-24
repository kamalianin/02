import React from 'react';
import {singleBook} from "../../reducers/booksReducers";



type bookElementType = {
    book: singleBook,
    onClick: (book:singleBook) => void
}

const BookElement = ({book, onClick}:bookElementType) => {
    return (
        <div className={`bookEl${book.checked?' Checked':''}`} onClick={()=>onClick(book)}><div className='dt_left'><b>{book.id}</b> {book.name}</div><b className='dt_right'>{book.price}$</b></div>
    );
};

export default BookElement;