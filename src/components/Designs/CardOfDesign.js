import React from "react";
import s from "./Designs.module.css"
import c from "../../common/commonStyles.module.css";
import Button from "../../common/components/Button/Button";


function CardOfDesigns({designs, buyButtonText, demoButtonText}) {
    const {_id, title, href, img} = designs;
    return (
        <div id={`${"item-" + _id}`} className={s.item}>
            <div className={s.item_imgBlock}>
                {/*<a href={href}>*/}
                <img src={img} alt=""/>
                {/*</a>*/}
            </div>
            <div className="details">
                <div className={s.item_title}>
                    {title}
                </div>
                <div className={s.item_buttonBlock}>
                    <Button className="button main"
                            onClick={() => alert("Hello world")}
                            blockName="designsMainButtonText"
                            text={buyButtonText}
                            fontSize={"13px"}
                            width={200}/>
                    <Button className="button secondary"
                            onClick={() => alert("Hello world")}
                            blockName="designsSecondaryButtonText"
                            text={demoButtonText}
                    width={200}/>
                </div>
            </div>

        </div>
    )
}

export default CardOfDesigns;