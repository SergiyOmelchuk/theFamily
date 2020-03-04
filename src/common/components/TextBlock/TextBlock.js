import React from "react";
import Text from "../../../common/components/Text/Text";
import style from "./TextBlock.module.scss";
import s from "../../../components/Features/Features.module.css";
import slider4 from "../../../components/Features/img/slider4.jpg";
import Slider from "react-slick";
import Button from "../Button/Button";


function TextBlock({classOfBlock, titleText, text, textColor, photoSrc, buttonText, mobile}) {

    return (
        <div className={`${classOfBlock} ${style.block} `}>
            {mobile &&
            <div className={style.photo}>
                <img src={photoSrc} alt=""/>
            </div>
            }
            <div className={style.titleText}>
                <Text text={titleText}
                      className="blockTitle"/>
            </div>
            <div className={style.text}>
                <Text text={text}
                      color={textColor}
                      className="text"/>
            </div>
            { mobile &&
            <div className={style.buttonBlock}>
                <Button className="button main"
                        onClick={() => alert("Hello world")}
                        text={buttonText}/>
            </div>
            }
        </div>
    )

}

export default TextBlock;