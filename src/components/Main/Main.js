import React from "react";
import s from "./Main.module.css";
import c from "../../common/commonStyles.module.css";
import backgroundImage from "../../img/header_background.jpg";


function Main( {mainTitle, mainMainText, mainText, mainMainButtonText, mainSecondaryButtonText} ) {
    return (

        <div id="main" className={s.main}>
            <div id="textBlock" className={s.textBlock}>
                <div className={c.titleCommon}>
                    {mainTitle}
                </div>
                <div className={s.mainText}>
                    {mainMainText}
                </div>
                <div className={s.text}>
                    {mainText}
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button className={`${s.buttonChooseDesign} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>
                    {mainMainButtonText}
                </button>
                <button id="button" className={`${s.buttonCreateSite} ${c.buttonCommon} ${c.buttonMainCommon}`}>
                    {mainSecondaryButtonText}
                </button>
            </div>
        </div>
    )
}

export default Main;