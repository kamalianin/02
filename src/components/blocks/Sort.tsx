import React  from 'react';
import sortArrow from '../../assets/img/arrow.png'
import '../../assets/scss/Books.scss'
import Select from '../UI/Select'
import MyJson from '../../books.json'
import './booksList.tsx';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getBooksListStoreTotalPrice, getSortByPriceStatus} from "../../reducers/reselector";
import {filterBooksByGroup, filterBooksByPrice} from "../../reducers/booksReducers";
import {AnyAction, Dispatch} from "redux";

type MyJsonElement = {
    "id": number,
    "name": string,
    "category": string,
    "price": number,
    option: string,
    title: string
}

let cats:Array<catsType> = [];
let Categories:Array<MyJsonElement> =  MyJson.map((elem) => {
    if (!cats.find(el => el.option === (elem.category))) {
        cats.push({...elem,
            title: elem.category,
            option: elem.category})
    }
    return  ({
        ...elem,
        title: elem.category,
        option: elem.category
})})

type catsType = {
    id: number,
    option: string,
    title: string
}

let catsFinal = [{title: 'every', id: 0, option: 'every'}, ...cats.map((cat) => {
    let {name, price, category, ...rest} = Categories.find(category => category.category === cat.option) as MyJsonElement
    return rest
})]





const Sort = () => {
    const dispatch = useDispatch()

    const onSelectChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        filterBooks(e.target.value);
    }
    const selector: TypedUseSelectorHook<RootState> = useSelector
    const isSortAsc = selector(getSortByPriceStatus)

    function filterBooks(value:string) {
        filterBooksFunc(dispatch, value)
    }

    const filterBooksFunc = async (dispatch: Dispatch<AnyAction>, type:string) => {
        dispatch(filterBooksByGroup(type))
    }

    const sortValue = () => {
        sortFunc(dispatch);
    };

    const sortFunc = async (dispatch: Dispatch<AnyAction>) => {
        dispatch(filterBooksByPrice())
    }




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