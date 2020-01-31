import React from "react";
import s from "./Header.module.css";
import logo from "../../img/logo.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    activateLandingEditMode, changeLanguage,
    deactivateLandingEditMode
} from "../redux/Landing-reducer";
import Languages from "../Languages/Languages";


function Header({landingEditMode, activateLandingEditMode, deactivateLandingEditMode, changeLanguage}) {
    return (
        <header id="header" className={s.header}>
            {landingEditMode &&
            <div className={s.activeEditMode}>
                Вы в режиме редактирования
            </div>}
            <div className={s.container_header}>
                <div className={s.header_logo}>
                    <img className={s.header_logo_img} src={logo} alt=""/>
                    <a href="#"></a>
                </div>
                <nav className={s.header_menu}>
                    <a href="/#designs">DESIGNS</a>
                    <a href="#">Price List</a>
                    <a href="#">Reviews</a>
                    <a href="#">Contacts</a>
                    <a>
                        Editmode:
                        <button onClick={activateLandingEditMode} className={landingEditMode ? s.active : false}>
                            On
                        </button>
                        <button onClick={deactivateLandingEditMode} className={!landingEditMode ? s.active : false}>
                            Off
                        </button>
                    </a>
                    <Languages changeLanguage={changeLanguage}/>
                </nav>
                <div className={s.header_login}>
                    <a className={s.header_language} href="#"></a>
                    <a href="#">Sign in</a>
                </div>

            </div>
        </header>
    )
}


let mapStateToProps = (state) => {
    return {
        landingEditMode: state.landingPage.landingEditMode,
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps, {deactivateLandingEditMode, activateLandingEditMode, changeLanguage})(Header);