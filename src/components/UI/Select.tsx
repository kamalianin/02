import React from 'react';
import '../blocks/Books.tsx'


const Select = ({optionEls, onChange}) => {
    const optionItems = optionEls.map((el) => (
        <option key={el.id} value={el.option} >{el.title}</option>
    ))
    return (
        <select className='select2'  onChange={onChange}>
            {optionItems}
        </select>
    );
};

export default Select