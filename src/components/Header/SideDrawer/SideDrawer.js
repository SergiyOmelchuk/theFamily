import React from 'react';

import './SideDrawer.css';
import NavMenu from "../NavMenu/NavMenu";
import LanguageBlock from "../LanguageBlock/LanguageBlock";
import Logo from "../Logo/Logo";
import LoginBlock from "../LoginBlock/LoginBlock";


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="logoAndLanguage">
                <LoginBlock />
                <LanguageBlock activeLanguageClass="activeLanguageClass" />
            </div>

            <ul>
                <NavMenu list/>
            </ul>
            <div className={props.languages}>

            </div>


        </nav>
    );
};

export default sideDrawer;
