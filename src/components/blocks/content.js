import React from 'react';
import Alert from "../UI/alert";
import Button from "../UI/button";
import Card from "../UI/card";
import Breadcrumbs from "./breadcrumbs";
import Books from "./Books";



const Content = () => {

    return (
        <div className="main-content">
            <div className="container">
                {/*<Breadcrumbs></Breadcrumbs>*/}
                {/*<Alert Class='primary' Message='Алерт'></Alert>*/}
                {/*<Button Class='primary' Message='Link' href='/news'></Button>*/}
                {/*<Card Name='test' Text='test2' Href='/news' BtnText='btntext'></Card>*/}
                <Books></Books>
            </div>
        </div>
    );
};

export default Content;