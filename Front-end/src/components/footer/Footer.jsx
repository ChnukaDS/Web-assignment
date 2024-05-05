import React from "react";
import './Footer.css';
import Dine_Dish_logo from '../../assets/DineDishLogo.png';
import first_logo from '../../assets/facebook, social network, website, social, brand, logo icon.png';
import second_logo from '../../assets/logo, social, pinterest, brand, social network, website icon.png';
import third_logo from '../../assets/social network, brand, logo, social, linkedin, website icon.png';
import forth_logo from '../../assets/social network, logo, brand, instagram, social, website icon.png';
import fifth_logo from '../../assets/tube, social, logo, website, you, social network, brand icon.png';
import sixth_logo from '../../assets/website, brand, logo, twitter, social, social network icon.png';
import copyright_logo from '../../assets/kisspng-copyright-symbol-trademark-copyright-notice-fair-u-trademark-symbol-5b442421dc4935.1216738215311923539023.png'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="first-section">
                <div className="footer-img-container">
                    <img src={Dine_Dish_logo} alt="footer-dine-dish-logo" className="footer-dine-logo" />
                    <p className="footer-1-text">Dine Dish Food Services and Resturents</p>
                </div>
                <div className="social-container">
                    <ul className="social-medias">
                        <li><a href="/"><img src={first_logo} alt="footer-first-logo" /></a></li>
                        <li><a href="/"><img src={second_logo} alt="footer-second-logo" /></a></li>
                        <li><a href="/"><img src={third_logo} alt="footer-third-logo" /></a></li>
                        <li><a href="/"><img src={forth_logo} alt="footer-forth-logo" /></a></li>
                        <li><a href="/"><img src={fifth_logo} alt="footer-fifth-logo" /></a></li>
                        <li><a href="/"><img src={sixth_logo} alt="footer-sixth-logo" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="second-section">
                <img src={copyright_logo} alt="footer-copy-right-logo" className="copyright-logo"/>
                <div className="small-text">Dine Dish Food Services | <a href="/"> Terms of Use </a> | <a href="/"> Privacy Policy </a> </div>
            </div>
        </div>
    )
}

export default Footer;