import BookElement from "./BookElement";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getBooksListStore, getBooksListStoreTotalPrice} from "../../reducers/reselector";
import {changeBooksStatus} from "../../reducers/booksReducers";


const BooksList = () => {

    const selector: TypedUseSelectorHook<RootState> = useSelector

    const books = selector(getBooksListStore)

    type DispatchFunc = () => AppDispatch

    const dispatch: DispatchFunc = useDispatch()

    const changeBooksStatusFunc = async (dispatch, book) => {
        dispatch(changeBooksStatus(book))
    }

    function bookElClick(book) {
        changeBooksStatusFunc(dispatch, book);
    }


    return (
        <div className='booksElContainer'>
            {books.map((book) => (
                <BookElement key={book.id} book={book} onClick={bookElClick}></BookElement>
            ))}
        </div>
    );
};

export default BooksList;