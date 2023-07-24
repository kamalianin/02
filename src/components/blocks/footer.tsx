import React from 'react';
import '../../assets/scss/footer.scss';
import {brandName} from '../../App'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {getPostsListStoreLength} from "../../reducers/reselector";
import {RootState} from "../../store";



const Footer = React.memo(() => {
    const selector: TypedUseSelectorHook<RootState> = useSelector
    const postsList = selector(getPostsListStoreLength)
    return (
        <footer>
            <div className="container d-flex justify-content-between">
                <div className="credits_block">
                    @copyright все права защищены никем, {brandName}, {new Date().getFullYear()}
                </div>
                <div className="header_info_block">Загружено статей: {postsList}, Добавлено в корзину книг: </div>
            </div>
        </footer>
    );
});

export default Footer;
