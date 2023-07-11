import React, {useLayoutEffect, useState} from 'react';
import axios from "axios";
import CardElement from "./cardElement";
import {useDispatch, useSelector, useStore} from "react-redux";
import {addPosts} from "../../actions";
import {Dispatch} from "react";
import {Button} from "primereact/button";
import {getPostsListStore} from "../../reducers/reselector";



const CardsPage = () => {


    const getPostsList = async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(addPosts(response.data))
            return(response.data)
        } catch(err) {
            console.error(err)
        }
    }

    let [pageNumber, setPageNumber] = useState(1);

    function showMoreElement() {
        setPageNumber(++pageNumber)
    }

    const postsList = useSelector(getPostsListStore)
    const dispatch: Dispatch = useDispatch()

    useLayoutEffect(()=> {
        getPostsList(dispatch)
    },[])

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