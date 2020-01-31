import React from "react";
import s from "./Main.module.css";
import Button from "../../common/components/Button/Button";
import Text from "../../common/components/Text/Text";


function Main({mainTitle, mainMainText, mainText, mainMainButtonText, mainSecondaryButtonText, landingEditMode, language, updateText}) {
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
                    <Text className="title"
                          blockName="mainTitle"
                          text={mainTitle}
                          landingEditMode={landingEditMode}
                          language={language}
                          updateText={updateText}/>
                    <Text className="mainText"
                          blockName="mainMainText"
                          text={mainMainText}
                          landingEditMode={landingEditMode}
                          language={language}
                          updateText={updateText}/>
                    <Text className="text"
                          blockName="mainText"
                          text={mainText}
                          landingEditMode={landingEditMode}
                          language={language}
                          updateText={updateText}/>
                </div>
                <div className={s.buttonBlock}>
                    <Button className="button secondary"
                            style={{width: "240px", marginRight: "40px"}}
                            onClick={() => alert("Hello world")}
                            blockName="mainSecondaryButtonText"
                            text={mainSecondaryButtonText}
                            landingEditMode={landingEditMode}
                            language={language}
                            updateText={updateText}/>
                    <Button className="button main"
                            style={{width: "240px"}}
                            onClick={() => alert("Hello world")}
                            blockName="mainMainButtonText"
                            text={mainMainButtonText}
                            landingEditMode={landingEditMode}
                            language={language}
                            updateText={updateText}/>
                </div>
            </div>
        </div>
    )
}

export default Main;