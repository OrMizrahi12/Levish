import React, { useState } from 'react'
import '../../css/Navs/SideNavbar.css'
import rightArrowImg from '../../Images/right-arrow.png'
import '../../css/BtnElements/SideBtnArrow.css'
const SideNavber = () => {

    const openNav = () => {
        //        border-left: solid 5px green;
        document.getElementById("mySidenav").style.width = "100px";
        document.getElementById("mySidenav").style.borderLeft = "solid 5px rgb(25,100,57)"
        document.getElementById("btnHerrow").hidden =true;
    }

    const closeNav = () => 
    {
        document.getElementById("mySidenav").style.borderLeft = ""
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("btnHerrow").hidden =false;

    } 
    

    return (
        <>
            <div id="mySidenav" class="sidenav">
               <div className='text-center'>
               <a style={{ marginTop: 80 }} class="closebtn" onClick={closeNav}>&times;</a>
                <a href="#recomenAnchor">המלצות</a>
                <a href="#contactAnchor">בואי נדבר</a>
                <a href="#explainAnchor">מה זה</a>
                <a href="#qAndRAnchor">שאלות </a>
                <a href="#stepsAnchor">צעדים</a>

                </div>
            </div>
            {/* <span onClick={openNav}>open</span> */}
            <img  id='btnHerrow' className='sideArrowBtn' onClick={openNav} src={rightArrowImg} />
            
            <div>
            </div>
        </>
    )
}

export default SideNavber