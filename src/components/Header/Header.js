import React from "react";
import s from "./Header.module.css";
import logo from "../../img/logo.png";


function Header() {
    return (
        <header id="header" className={s.header}>
            <div className={s.container_header}>
                <div className={s.header_logo}>
                    <img className={s.header_logo_img} src={logo} alt=""/>
                    <a href="#"></a>
                </div>
                <nav className={s.header_menu}>
                    <a href="#">DESIGNS</a>
                    <a href="#">Price List</a>
                    <a href="#">Reviews</a>
                    <a href="#">Contacts</a>
                </nav>
                <div className={s.header_login}>
                    <a className={s.header_language} href="#"></a>
                    <a href="#">Sign in</a>
                </div>
            </div>
        </header>
    )
}

export default Header;