import React from "react";
import s from "./Main.module.css";
import c from "../../common/commonStyles.module.css";
import backgroundImage from "../../img/header_background.jpg";
import Button from "../../common/components/Button/Button";
import MainButtonText__EditMainBlock from "../Edit/EditMainBlock/MainButtonText__EditMainBlock";
import {updateText} from "../redux/Landing-reducer";
import Text from "../../common/components/Text/Text";


function Main({mainTitle, mainMainText, mainText, mainMainButtonText, mainSecondaryButtonText, updateText}) {
    return (
        <div>
            {/*<div id="main" className={s.main}>*/}

            {/*    <div className={s.buttonBlock}>*/}
            {/*        <button className={`${s.buttonChooseDesign} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>*/}
            {/*            {mainMainButtonText}*/}
            {/*        </button>*/}
            {/*        <button id="button" className={`${s.buttonCreateSite} ${c.buttonCommon} ${c.buttonMainCommon}`}>*/}
            {/*            {mainSecondaryButtonText}*/}
            {/*        </button>*/}
            {/*        <Button className="mainText" id="mainSecondaryButtonText" text={mainSecondaryButtonText}*/}
            {/*                updateText={updateText}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div id="main" className={s.main}>
                <div blockName="textBlock" className={s.textBlock}>
                    <Text className="title" blockName="mainTitle" text={mainTitle}
                            updateText={updateText}/>
                    <Text className="mainText" blockName="mainMainText" text={mainMainText}
                            updateText={updateText}/>
                    <Text className="text" blockName="mainText" text={mainText}
                            updateText={updateText}/>
                </div>
                <div className={s.buttonBlock}>
                    <Button className="button secondary"
                            style={ {width: "240px", marginRight: "40px"} }
                            blockName="mainSecondaryButtonText"
                            text={mainSecondaryButtonText}
                            updateText={updateText}/>
                    <Button className="button main"
                            style={ {width: "240px"} }
                            blockName="mainMainButtonText"
                            text={mainMainButtonText}
                            updateText={updateText}/>
                </div>
            </div>
        </div>
    )
}

export default Main;