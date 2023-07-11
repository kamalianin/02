import React, {useState} from 'react';
import Sort from "./Sort";
import BooksList from "./booksList";
import TotalCount from "./totalCount";
import MyJson from "../../books.json";
import {useDispatch} from 'react-redux';



const Books = () => {
    let MyJsonExt = MyJson.map(book => {
        return {...book, checked: false}
    })


    const dispatch = useDispatch();

    // store.dispatch({ type: 'SET_BOOKS', payload: books });
    const [booksData, setBooksData] = useState(MyJsonExt)


    function filterBooks(value) {
        if(value !== 'every') {
            const filteredBooks = MyJsonExt.filter( book => {
                return book.category.toLowerCase().includes(value.toLowerCase())
            })
            setBooksData(filteredBooks)
        } else {
            setBooksData(MyJsonExt)
        }
    }

    const [isSortAsc, setIsSortAsc] = useState(true);
    const sortValue = () => {
        if(isSortAsc){
            setIsSortAsc(false);
            setBooksData(booksData.sort(sortByField('price', 1)))
        } else {
            setIsSortAsc(true);
            setBooksData(booksData.sort(sortByField('price', 0)))
        }
    };

    function sortByField(field, asc) {
        if(asc) {
            return (a, b) => a[field] > b[field] ? 1 : -1

        } else {
            return (a, b) => a[field] > b[field] ? -1 : 1
        }
    }

    function bookElClick(book) {
        setBooksData(booksData.map((bookbook => {
            if(bookbook.id === book.id) {
                return {...bookbook, checked: !book.checked}
            } else {
                return bookbook;
            }
        })))
    }

    let totalCount = 0;

    function bookPriceCounter() {
        booksData.forEach(book => {
            if(book.checked) {
                totalCount += book.price;
            }
        })
    }

    bookPriceCounter()

    return (
        <div className='booksContainer'>
            <h1>Books</h1>
            <Sort isSortAsc={isSortAsc} sortValue={sortValue} filterBooks={filterBooks}></Sort>
            <BooksList booksData={booksData} bookElClick={bookElClick}></BooksList>
            <TotalCount count={totalCount}></TotalCount>
        </div>
    );
};

export default Books;