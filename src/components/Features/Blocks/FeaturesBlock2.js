import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/photo_features_1.jpg";
import img2 from ".././img/photo_features_2.jpg";
import c from "../../../common/commonStyles.module.css";


function FeaturesBlock2({block2}) {
    return (
        <div className={s.block2}>
                <div className={`${s.block2_title} ${s.title}`}>
                <Text blockName="featuresBlock2Title" text={block2.title}/>
            </div>
            <div className={s.block2_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block1Title" text={block2.textBlock1.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block1Text" text={block2.textBlock1.text}/>
                </div>
            </div>
            <div className={s.block2_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block2Title" text={block2.textBlock2.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block2Text" text={block2.textBlock2.text}/>
                </div>
            </div>

            <div className={s.block2_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block3Title" text={block2.textBlock3.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block3Text" text={block2.textBlock3.text}/>
                </div>
            </div>
            <div className={s.block2_text4}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block4Title" text={block2.textBlock4.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block4Text" text={block2.textBlock4.text}/>
                </div>
            </div>

        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        block2: state.landingPage.features.block2,
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock2);