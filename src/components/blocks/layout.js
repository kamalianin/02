import React from 'react';
import Header from "./header";
import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import {RouteObject, useRoutes} from "react-router-dom";
import Main from "./main";
import Books from "./Books";
import Forms from "./Forms";
import CardsPage from "./cardsPage";
import PrimereactIcons from "./primereact_icons";
import NotFound from "./notFound";

const Layout = React.memo(() => {

    let Router = useRoutes([
        {
            path: '*',
            element: <NotFound/>
        },
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/books',
            element:  <Books/>,
        },
        {
            path: '/forms',
            element: <Forms/>
        },
        {
            path: '/cards',
            element: <CardsPage/>
        },
        {
            path: 'primereact',
            element: <PrimereactIcons/>
        },
    ]);
    return (
        <>
            <Header></Header>
            <div className="main-content">
                {/*<Breadcrumbs></Breadcrumbs>*/}
                <div className="container">
                    {Router}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
});

export default Layout;