import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/photo_features_1.jpg";
import img2 from ".././img/photo_features_2.jpg";


function FeaturesBlock1({block1}) {
    return (
        <div className={s.block1}>
            <div className={`${s.titleBlock} ${s.title}`}>
                <Text blockName="featuresBlock1Title" text={block1.title}/>
            </div>
            <div className={s.photo1}>
                <img src={img1} alt=""/>
                <div className={s.photo_rightShadowElement}></div>
            </div>
            <div className={s.photo2}>
                <img src={img2} alt=""/>
                <div className={s.photo_rightShadowElement}></div>
            </div>
            <div className={s.text1}>
                <div className={`${s.titleText} ${s.title}`}>
                    <Text blockName="featuresBlock1Block1Title" text={block1.textBlock1.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock1Block1Text" text={block1.textBlock1.text}/>
                </div>
            </div>
            <div className={s.text2}>
                <div className={`${s.titleText} ${s.title}`}>
                    <Text blockName="featuresBlock1Block2Title" text={block1.textBlock2.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock1Block2Text" text={block1.textBlock2.text}/>
                </div>
            </div>
            <div className={s.text3}>
                <div className={`${s.titleText} ${s.title}`}>
                    <Text blockName="featuresBlock1Block3Title" text={block1.textBlock3.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock1Block3Text" text={block1.textBlock3.text}/>
                </div>
            </div>
            <div className={s.text4}>
                <div className={`${s.titleText} ${s.title}`}>
                    <Text blockName="featuresBlock1Block4Title" text={block1.textBlock4.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock1Block4Text" text={block1.textBlock4.text}/>
                </div>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        block1: state.landingPage.features.block1,
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock1);