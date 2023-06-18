import React from 'react';
import '../../assets/scss/footer.scss';
import {brandName} from '../../App.js'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="credits_block">
                    @copyright все права защищены никем, {brandName}, {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
