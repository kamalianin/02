import React from 'react';
import '../../assets/scss/Navbar.scss'
import logo from '../../assets/img/logo_header.png'
import {brandName} from '../../App.js'

const navEls = [
    { title: 'Новости', id: 1, href: '/news' },
    { title: 'Раздел 1', id: 2, href: '/1' },
    { title: 'Раздел 2', id: 3, href: '/2' },
    { title: 'Раздел 3', id: 4, href: '/3' },
    { title: 'Контакты', id: 5, href: '/contacts' },
];



const Navbar = () => {
    const navbarItems = navEls.map((el) => (
        <a className="nav-item" href={el.href} key={el.id}>{el.title}</a>
    ))
    return (
        <div className="navbar-wrap">
            <div className="container">
                <div className="d-flex">
                    <a href='/' className="brand_block">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="brand_name">{brandName}</div>
                    </a>
                    <div className="navbar">{navbarItems}</div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;