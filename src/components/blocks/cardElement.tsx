import React, {Dispatch} from 'react';
import {useDispatch} from "react-redux";
import {removePost} from "../../reducers/postsReducers";



const CardElement = ({cardTitle, cardText, cardId}) => {

    const dispatch: Dispatch<any> = useDispatch()

    const cardRemove = () => {
        dispatch(removePost(cardId));
    }

    return (
        <div className="col-lg-4">
            <div className="h-100 card">
                <a onClick={cardRemove} className="remove-card-btn"><i className="pi pi-times" style={{ color: 'black' }}></i></a>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardText}</p>
                </div>
            </div>
        </div>
    );
};

export default CardElement;