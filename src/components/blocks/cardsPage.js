import React, {useLayoutEffect, useState} from 'react';
import axios from "axios";
import CardElement from "./cardElement";
import {useDispatch, useSelector, useStore} from "react-redux";
import {Button} from "primereact/button";
import {getPostsListStore} from "../../reducers/reselector";



const CardsPage = () => {

    let [pageNumber, setPageNumber] = useState(1);

    function showMoreElement() {
        setPageNumber(++pageNumber)
    }

    const postsList = useSelector(getPostsListStore)

    let counter = 6 * pageNumber;

    let elems = postsList.filter((post,index) => index < counter).map((posts) =>
        <CardElement key={posts.id} cardId={posts.id} cardTitle={posts.title} cardText={posts.body}></CardElement>
    )

    let button;

    if(postsList.length > counter) {
      button = <div className="d-flex justify-content-center"><Button onClick={showMoreElement} className="col-lg-3" label="Показать ещё 6 элементов"></Button></div>
    } else {
        counter = postsList.length;
    }

    return (
        <div className="cardsPageContainer">
            <div className="row">
                {elems}
                {button}
            </div>
            Показано: {counter} из {postsList.length}
        </div>
    );
};

export default CardsPage;