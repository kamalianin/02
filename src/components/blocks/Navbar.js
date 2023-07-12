import React from 'react';
import '../../assets/scss/Navbar.scss'
import logo from '../../assets/img/logo_header.png'
import {brandName} from '../../App.js'
import {useNavigate} from "react-router-dom";

const navEls = [
    { title: 'Формы', id: 1, href: '/forms' },
    { title: 'Книги, сортировка+сумма значений', id: 2, href: '/Books' },
    { title: 'Редакс раздел 1', id: 3, href: '/cards' },
    { title: 'Раздел 3', id: 4, href: '/3' },
    { title: 'Праймреакт', id: 5, href: '/primereact' },
];




const Navbar = () => {
    const Navigator = useNavigate();

    const navbarItems = navEls.map((el) => (
        <div className="nav-item" onClick={()=>Navigator(el.href)} key={el.id}>{el.title}</div>
    ))
    return (
        <div className="navbar-wrap">
            <div className="container">
                <div className="d-flex">
                    <div onClick={() => Navigator('/')} className="brand_block">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="brand_name">{brandName}</div>
                    </div>
                    <div className="navbar">{navbarItems}</div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;