import React  from 'react';
import sortArrow from '../../assets/img/arrow.png'
import '../../assets/scss/Books.scss'
import Select from '../UI/Select.tsx'
import MyJson from '../../books.json'
import './booksList.tsx';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getBooksListStoreTotalPrice, getSortByPriceStatus} from "../../reducers/reselector";
import {filterBooksByGroup, filterBooksByPrice} from "../../reducers/booksReducers";

let cats = [];
let Categories =  MyJson.map((elem) => {
    if (!cats.includes(elem.category)) {
        cats.push(elem.category)
    }
    return  ({
        ...elem,
        title: elem.category,
        option: elem.category
})})


let catsFinal = [{title: 'every', id: 0, option: 'every'}, ...cats.map((cat) => {
    let {name, price, category, ...rest} = Categories.find(category=>category.category===cat)
    return rest
})]





const Sort = () => {
    const onSelectChange = (e) =>{
        filterBooks(e.target.value);
    }
    const selector: TypedUseSelectorHook<RootState> = useSelector
    const isSortAsc = selector(getSortByPriceStatus)

    function filterBooks(value:string) {
        filterBooksFunc(dispatch, value)
    }

    const filterBooksFunc = async (dispatch, type:string) => {
        dispatch(filterBooksByGroup(type))
    }

    const sortValue = () => {
        sortFunc(dispatch);
    };

    const sortFunc = async (dispatch) => {
        dispatch(filterBooksByPrice())
    }

    type DispatchFunc = () => AppDispatch

    const dispatch: DispatchFunc = useDispatch()

    return (
        <div className='container'>
            <div className='sortContainer'>
                <div className={`priceBlock${isSortAsc ? " asc" : " desc"}`}  onClick={sortValue}><span>Price</span> <img className='sortArrow' src={sortArrow} alt=""/></div>
                <Select optionEls={catsFinal} onChange={onSelectChange}></Select>
            </div>
        </div>
    );
};

export default Sort;