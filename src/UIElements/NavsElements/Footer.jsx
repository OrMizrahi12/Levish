import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Navs/Footer.css'

const Footer = () => {

    const navigate = useNavigate();

    return ( 
       <>
            <br />
            <div className='footerWraper'>
                <footer class="footer" >
                    <div class="waves">
                        <div class="wave" id="wave1"></div>
                        <div class="wave" id="wave2"></div>
                        <div class="wave" id="wave3"></div>
                        <div class="wave" id="wave4"></div>
                    </div>
                    <a href='#' className='footerLinks' onClick={() => navigate("/")}>דף הבית</a>
                    <a href='#' className='footerLinks' onClick={() => navigate("/Freckels")} >נמשים</a>
                    <a href='#' className='footerLinks' onClick={() => navigate("/Lips")}>שפתיים</a>
                    <a href='#' className='footerLinks' onClick={() => navigate("/ContactUs")}>צרי קשר</a>
                    <hr />
                    <a className='footerLinks' onClick={() => window.open("https://or-mizrahi.netlify.app/")}>Made by Or mizrahi{" >>"}</a>
                </footer>

            </div>
        </>
    )
}

export default Footer