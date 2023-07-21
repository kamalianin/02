import './assets/scss/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import React, {Dispatch, useEffect, useLayoutEffect} from "react";
import Layout from "./components/blocks/layout";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import MyJson from "./books.json";
import {addPosts} from "./reducers/postsReducers";
import {addBooks} from "./reducers/booksReducers";
import {AppDispatch} from "./store";

export const brandName:string = process.env.REACT_APP_NAME

const App = React.memo(() => {
    const getPostsList = async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(addPosts(response.data))
            return(response.data)
        } catch(err) {
            console.error(err)
        }
    }
    const getBooksList = async (dispatch) => {
        let MyJsonExt:object = MyJson.map(book => {
            return {...book, checked: false}
        })
        dispatch(addBooks(MyJsonExt))
    }
    type DispatchFunc = () => AppDispatch
    const dispatch: DispatchFunc = useDispatch()
    useLayoutEffect(()=> {
        let posts = getPostsList(dispatch)
        let books = getBooksList(dispatch)
    },[])

  return (
    <div className="App">
        <Layout></Layout>
    </div>
  );
});

export default App;
