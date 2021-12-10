import React from 'react';
import "./topbar.css"
import {Link} from 'react-router-dom'
// import img_logo from './images/logo192.png'
import img_moi from './images/new-badge.9116f07c.png'
import Slick from './Slick'
import Text from './Text'
import Footer from './Footer';
import login from './login/Login'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';
import Menu from './Menu'

const Topbar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
       <div><Menu/></div>
        <div id="b"><Slick /></div>
        <div><Text /></div>
        <div><Footer /></div>
        <div class="messenger">
            <a target="_blank" href="https://www.facebook.com/han.hieu.980/ "><span><i class="fab fa-facebook-messenger"></i></span></a>
        </div>

        
        </>
    );
}

export default Topbar;
