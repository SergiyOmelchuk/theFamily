import React, {useState} from "react";
import s from "./Header.module.css";
import {connect} from "react-redux";
import {
    activateLandingEditMode, changeLanguage,
    deactivateLandingEditMode
} from "../redux/Landing-reducer";
import NavMenu from "./NavMenu/NavMenu";
import SideDrawer from "./SideDrawer/SideDrawer";
import Logo from "./Logo/Logo";
import LanguageBlock from "./LanguageBlock/LanguageBlock";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import LoginBlock from "./LoginBlock/LoginBlock";
import Backdrop from "../Backdrop/Backdrop";


function Header({landingEditMode, language, activateLandingEditMode, deactivateLandingEditMode, navMenu, changeLanguage, loginBlockText}) {
    const [sideDrawerOpen, drawerToggleClickHandler] = useState(false);

    function drawerClickHandler() {
        drawerToggleClickHandler(!sideDrawerOpen);
    }

    return (
        <header id="header" className={s.header}>
            {landingEditMode &&
            <div className={s.activeEditMode}>
                Вы в режиме редактирования
            </div>}
            <div className={s.container_header} id="container_header">

                <div className={s.header_logo}>
                    <Logo/>
                </div>
                <nav className={`${s.header_menu} ${s.desktop_header}`}>

                    <NavMenu/>
                </nav>
                <div className={`${s.languageBlock} ${s.desktop_header}`}>
                    <LanguageBlock/>
                </div>
                <div className={s.header_login}>
                    <span className={s.desktop_header}>
                        <LoginBlock />
                    </span>
                    <DrawerToggleButton click={drawerClickHandler}/>
                </div>
                {sideDrawerOpen ? <Backdrop click={drawerClickHandler}/> : null}
                <SideDrawer list show={sideDrawerOpen}/>


                {/*    /!*<a className={s.editMode}>*!/*/}
                {/*    /!*    Editmode:*!/*/}
                {/*    /!*    <button onClick={activateLandingEditMode} className={landingEditMode ? s.active : false}>*!/*/}
                {/*    /!*        On*!/*/}
                {/*    /!*    </button>*!/*/}
                {/*    /!*    <button onClick={deactivateLandingEditMode} className={!landingEditMode ? s.active : false}>*!/*/}
                {/*    /!*        Off*!/*/}
                {/*    /!*    </button>*!/*/}
                {/*    /!*</a>*!/*/}


                {/*<div className={s.header_languagesBlock}>*/}
                {/*        <span onClick={()=>changeLanguage("uk")} className={ language == "uk" ? s.activeLanguage : null }> UA </span>*/}
                {/*        <span onClick={()=>changeLanguage("en")} className={ language == "en" ? s.activeLanguage : null }> EN </span>*/}
                {/*        <span onClick={()=>changeLanguage("ru")} className={ language == "ru" ? s.activeLanguage : null }> RU </span>*/}
                {/*    /!*<FaGlobe className={s.header_icon}/>*!/*/}
                {/*    /!*<Languages  changeLanguage={changeLanguage}/>*!/*/}
                {/*</div>*/}
                {/*<div className={s.header_login}>*/}
                {/*    <a href="#">{loginBlockText[language]}</a>*/}
                {/*</div>*/}

                {/*/!*<div className={s.drawerClasses}>*!/*/}
                {/*/!*    <nav className={s.header_menu}>*!/*/}
                {/*/!*        <NavMenu />*!/*/}

                {/*/!*    </nav>*!/*/}
                {/*/!*    <div className={s.header_languagesBlock}>*!/*/}
                {/*/!*        <span onClick={() => changeLanguage("uk")}*!/*/}
                {/*/!*              className={language == "uk" ? s.activeLanguage : null}> UA </span>*!/*/}
                {/*/!*        <span onClick={() => changeLanguage("en")}*!/*/}
                {/*/!*              className={language == "en" ? s.activeLanguage : null}> EN </span>*!/*/}
                {/*/!*        <span onClick={() => changeLanguage("ru")}*!/*/}
                {/*/!*              className={language == "ru" ? s.activeLanguage : null}> RU </span>*!/*/}
                {/*/!*    </div>*!/*/}


            </div>
        </header>
    )
}


let mapStateToProps = (state) => {
    return {
        landingEditMode: state.landingPage.landingEditMode,
        language: state.landingPage.language,
        navMenu: state.landingPage.navMenu,
        loginBlockText: state.landingPage.loginBlockText
    };
};


export default connect(mapStateToProps, {deactivateLandingEditMode, activateLandingEditMode, changeLanguage})(Header);