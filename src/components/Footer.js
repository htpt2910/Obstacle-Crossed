import React from 'react';
import './Footer.css';
import fblogo from '../assets/images/Facebook Icon .png';
import instlogo from '../assets/images/instagram-logo.png';

function Footer() {
    return (
        <div className='footer'>
                <p>contact us</p>
                <img src={instlogo} width="65"
                    height="60" />
                <img src={fblogo} width="130"
                    height="60" />
                <a href="mailto: abc@example.com">bestteamname@gmail.com</a>
            </div>
    )
}

export default Footer
