import React from "react";
import s from "./Main.module.css";
import c from "../../common/commonStyles.module.css";
import backgroundImage from "../../img/header_background.jpg";


function Main() {
    return (
        <div id="main" className={s.main}>
            <div id="textBlock" className={s.textBlock}>
                <div className={c.titleCommon}>
                    Your wedding site
                </div>
                <div className={s.mainText}>
                    ALL YOUR WEDDING MOMENTS IN ONE PLACE
                </div>
                <div className={s.text}>
                    Create your personal beautiful site in minutes.
                    Choose a design, add text, photos and videos.
                    Share the link with your guests and relatives, acquaint them with each other.
                    Prepare for the celebration in advance. Your site will look equally nice on any gadget.
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button className={`${s.buttonChooseDesign} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>
                    CHOOSE DESIGN
                </button>
                <button id="button" className={`${s.buttonCreateSite} ${c.buttonCommon} ${c.buttonMainCommon}`}>
                    CREATE SITE
                </button>
            </div>
        </div>
    )
}

export default Main;