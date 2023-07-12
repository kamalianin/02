import './assets/scss/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import {RouteObject, useRoutes} from "react-router-dom";
import Main from "./components/blocks/main";
import Books from "./components/blocks/Books";
import Forms from "./components/blocks/Forms";
import CardsPage from "./components/blocks/cardsPage";
import PrimereactIcons from "./components/blocks/primereact_icons";
import NotFound from "./components/blocks/notFound";
import React, {Dispatch, useEffect, useLayoutEffect} from "react";
import Layout from "./components/blocks/layout";
import axios from "axios";
import {addPosts} from "./actions";
import {useDispatch} from "react-redux";


export const  brandName = process.env.REACT_APP_NAME

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
    const dispatch: Dispatch = useDispatch()
    useLayoutEffect(()=> {
        getPostsList(dispatch)
    },[])
  return (
    <div className="App">
        <Layout></Layout>
    </div>
  );
});

export default App;
