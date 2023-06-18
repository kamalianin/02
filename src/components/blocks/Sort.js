import React, { useState } from 'react';
import sortArrow from '../../assets/img/arrow.png'
import '../../assets/scss/Books.scss'
import Select from '../UI/Select.js'
import MyJson from '../../books.json'
import './booksList.js';

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

const Sort = ({isSortAsc, sortValue, filterBooks}) => {
    const onSelectChange = (e) =>{
        filterBooks(e.target.value);
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