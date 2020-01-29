import React from "react";
import s from "./Designs.module.css"
import c from "../../common/commonStyles.module.css";
import image1 from "./img/design1.jpg";
import image2 from "./img/design2.jpg";
import image3 from "./img/design3.jpg";


function Designs() {
    return (
        <div id="designs" className={s.designs}>
            <div className={`${s.title} ${c.titleCommon}`}>
                Choice of designs
            </div>
            <div className={s.designsBlock}>
                <div className={s.itemSecondary}>
                    <img src={image2} alt=""/>
                </div>
                <div className={s.item}>
                    <div className={s.item_imgBlock}>
                        <img src={image1} alt=""/>

                    </div>
                    <div className={s.item_title}>
                        Title
                    </div>
                    <div className={s.item_buttonBlock}>
                        <button className={`${s.buyButton} ${c.buttonCommon} ${c.buttonMainCommon}`}>buy now</button>
                        <button className={`${s.demoButton} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>demo</button>
                    </div>
                </div>
                <div className={s.itemSecondary}>
                    <img src={image3} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Designs;