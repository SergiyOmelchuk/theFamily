import React from "react";
import s from "./Designs.module.css"
import c from "../../common/commonStyles.module.css";


function CardOfDesigns({designs}) {
    const {_id, title, href, img} = designs;
    return (
        <div id={`${"item-" + _id}`} className={s.item}>
                    <div className={s.item_imgBlock}>
                        {/*<a href={href}>*/}
                            <img src={img} alt="" />
                        {/*</a>*/}
                    </div>
                    <div className="details">
                        <div className={s.item_title}>
                            {title}
                        </div>
                        <div className={s.item_buttonBlock}>
                            <button className={`${s.buyButton} ${c.buttonCommon} ${c.buttonMainCommon}`}>buy now</button>
                            <button className={`${s.demoButton} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>demo</button>
                        </div>
                    </div>

                </div>
    )
}

export default CardOfDesigns;