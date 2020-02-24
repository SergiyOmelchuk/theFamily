import React from "react";
import s from "./Main.module.css";
import Button from "../../common/components/Button/Button";
import Text from "../../common/components/Text/Text";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";


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
                    <div className={s.title}>
                        <Text blockName="mainTitle"
                              text={mainTitle}/>
                    </div>
                    <div className={s.mainText}>
                        <Text blockName="mainMainText"
                              text={mainMainText}/>
                    </div>
                    <div className={s.text}>
                        <Text blockName="mainText"
                              text={mainText}/>
                    </div>

                </div>
                <div className={s.buttonBlock}>
                    <Button className="button secondary"
                            style={{width: "240px", marginRight: "40px"}}
                            onClick={() => alert("Hello world")}
                            blockName="mainSecondaryButtonText"
                            text={mainSecondaryButtonText}/>
                    <Button className="button main"
                            style={{width: "240px"}}
                            onClick={() => alert("Hello world")}
                            blockName="mainMainButtonText"
                            text={mainMainButtonText}/>
                </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        landingEditMode: state.landingPage.landingEditMode,
        language: state.landingPage.language,
        mainTitle: state.landingPage.mainBlock.mainTitle,
        mainMainText: state.landingPage.mainBlock.mainMainText,
        mainText: state.landingPage.mainBlock.mainText,
        mainMainButtonText: state.landingPage.mainBlock.mainMainButtonText,
        mainSecondaryButtonText: state.landingPage.mainBlock.mainSecondaryButtonText
    };
};

export default connect(mapStateToProps, {updateText})(Main);