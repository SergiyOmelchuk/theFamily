import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/features_block3_photo1.jpg";
import img2 from ".././img/features_block3_photo2.jpg";


function FeaturesBlock3({block3}) {
    return (
        <div className={s.block3}>
            <div className={`${s.block3_title} ${s.title}`}>
                <Text blockName="featuresBlock3Title" text={block3.title}/>
            </div>
            <div className={s.block3_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block1Title" text={block3.textBlock1.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block1Text" text={block3.textBlock1.text}/>
                </div>
            </div>
            <div className={s.block3_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block2Title" text={block3.textBlock2.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block2Text" text={block3.textBlock2.text}/>
                </div>
            </div>
            <div className={s.block3_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block3Title" text={block3.textBlock3.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block3Text" text={block3.textBlock3.text}/>
                </div>
            </div>
            <div className={s.block3_photo1}>
                <img src={img1} alt=""/>
                <div className={s.photo_leftShadowElement}></div>
            </div>
            <div className={s.block3_photo2}>
                <img src={img2} alt=""/>
                <div className={s.photo_leftShadowElement}></div>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        block3: state.landingPage.features.block3,
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock3);