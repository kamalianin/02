import React from 'react';


const BookElement = ({book, onClick}) => {
    return (
        <div className={`bookEl${book.checked?' Checked':''}`} onClick={()=>onClick(book)}><div className='dt_left'><b>{book.id}</b> {book.name}</div><b className='dt_right'>{book.price}$</b></div>
    );
};

export default BookElement;