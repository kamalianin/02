import './assets/scss/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import React, {useEffect, useLayoutEffect} from "react";
import Layout from "./components/blocks/layout";
import {useDispatch} from "react-redux";
import MyJson from "./books.json";
import {addBooks, booksList} from "./reducers/booksReducers";
import {useGetPostsQuery} from "./Api";
import {AnyAction, Dispatch} from "redux";

export const brandName:string|undefined = process.env.REACT_APP_NAME

const App = React.memo(() => {
    const getBooksList = async (dispatch: Dispatch<AnyAction>) => {
        let MyJsonExt:booksList = MyJson.map(book => {
            return {...book, checked: false}
        })
        dispatch(addBooks(MyJsonExt))
    }
    const dispatch = useDispatch()

    useEffect  (()=> {
        let books = getBooksList(dispatch)
    },[])

    const {isLoading, data} = useGetPostsQuery()
      return (
        <div className="App">
            <Layout></Layout>
        </div>
      );
});

export default App;
