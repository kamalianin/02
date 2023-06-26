import React from 'react';
import {RouteObject, useRoutes} from "react-router-dom";
import Books from "./Books";
import Forms from "./Forms";
import NotFound from "./notFound";
import Main from "./main";
import PrimereactIcons from "./primereact_icons";


function Content() {

    const ROUTES: RouteObject[] = [
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
            path: 'primereact',
            element: <PrimereactIcons/>
        },
        {
            path: '*',
            element: <NotFound/>
        }
    ]
    return useRoutes(ROUTES);
}

export default Content;