import BookElement from "./BookElement";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {getBooksListStore} from "../../reducers/reselector";
import {changeBooksStatus, singleBook} from "../../reducers/booksReducers";
import {AnyAction, Dispatch} from "redux";


const BooksList = () => {

    const selector: TypedUseSelectorHook<RootState> = useSelector

    const books = selector(getBooksListStore)

    const dispatch = useDispatch()

    const changeBooksStatusFunc = async (dispatch: Dispatch<AnyAction>, book:singleBook) => {
        dispatch(changeBooksStatus(book))
    }

    function bookElClick(book:singleBook) {
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