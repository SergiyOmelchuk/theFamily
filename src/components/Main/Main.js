import React from "react";
import s from "./Main.module.css";
import Button from "../../common/components/Button/Button";
import Text from "../../common/components/Text/Text";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import slider1 from "../Features/img/slider.jpg";
import ReactPlayer from "react-player";


function Main({mainTitle, mainMainText, mainText, mainMainButtonText, mainSecondaryButtonText, landingEditMode, language, updateText}) {
    return (
        <div>
            <div id="main" className={s.main}>
                <div blockName="textBlock" className={s.textBlock}>
                    <div className={s.title}>
                        <Text blockName="mainTitle"
                              text={mainTitle}
                              className="title"/>
                    </div>
                    <div className={s.mainText}>
                        <Text blockName="mainMainText"
                              text={mainMainText}/>
                    </div>
                    <div className={s.text}>
                        <Text blockName="mainText"
                              text={mainText}
                              className="text"/>
                    </div>

                </div>
                <div className={s.buttonBlock}>
                    <Button className="button secondary"
                            onClick={() => alert("Hello world")}
                            blockName="mainSecondaryButtonText"
                            text={mainSecondaryButtonText}/>
                    <Button className="button main"
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