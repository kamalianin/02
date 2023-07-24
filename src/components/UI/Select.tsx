import React from 'react';
import '../blocks/Books.tsx'

type selectProps = {
    optionEls: Array<{
        id: number,
        option: string,
        title: string
    }>,
    onChange: (events:any) => void
}

const Select = ({optionEls, onChange}:selectProps) => {
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