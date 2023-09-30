import React from 'react';
import img from '../images/logo.png';
import './header.css';


function Header(logo){
    return <header>
        <div id='logo'><img src={img} alt="" /></div>
        <div id='titre'>
            <h2 id='t1'>Titre de site</h2>
            <h4 id='t2'>Notre Slogan</h4>
        </div>
    </header>
}

export default Header;

/*  export default Header = ()=>{
    return <header>
        <div id='logo'><img src="{logo}" alt="" /></div>
        <div id='titre'>
            <h2>Titre de site/</h2>
            <h4>Notre Slogan</h4>
        </div>
    </header>
 } */