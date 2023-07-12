import React from 'react';
import '../../assets/scss/footer.scss';
import {brandName} from '../../App.js'
import {useDispatch, useSelector} from "react-redux";
import {getPostsListStore} from "../../reducers/reselector";



const Footer = React.memo(() => {


    const postsList = useSelector(getPostsListStore)
    return (
        <footer>
            <div className="container d-flex justify-content-between">
                <div className="credits_block">
                    @copyright все права защищены никем, {brandName}, {new Date().getFullYear()}
                </div>
                <div className="header_info_block">Загружено статей: {postsList.length}, Добавлено в корзину книг:</div>
            </div>
        </footer>
    );
});

export default Footer;
