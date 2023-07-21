import React from 'react';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../store";
import {getBooksListStoreTotalPrice} from "../../reducers/reselector";

const TotalCount = () => {

    const selector: TypedUseSelectorHook<RootState> = useSelector
    const count = selector(getBooksListStoreTotalPrice)
    return (
        <div>
            Total Count:
            <br></br>
            <b>{count}</b>
        </div>
    );
};

export default TotalCount;