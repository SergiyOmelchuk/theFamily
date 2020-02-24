import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import c from "../../../common/commonStyles.module.css";
import Text from "../../../common/components/Text/Text";


function FeaturesBlock4 ({block4}) {
    return (
        <div className={s.block4}>
                <div className={`${s.block4_title} ${s.title}`}>
                <Text blockName="featuresBlock4Title" text={block4.title}/>
            </div>
            <div className={s.block4_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block1Title" text={block4.textBlock1.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block1Text" text={block4.textBlock1.text}/>
                </div>
            </div>
            <div className={s.block4_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block2Title" text={block4.textBlock2.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block2Text" text={block4.textBlock2.text}/>
                </div>
            </div>
            <div className={s.block4_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block3Title" text={block4.textBlock3.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block3Text" text={block4.textBlock3.text}/>
                </div>
            </div>
            <div className={s.block4_text4}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block4Title" text={block4.textBlock4.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block4Text" text={block4.textBlock4.text}/>
                </div>
            </div>
            <div className={s.block4_text5}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block5Title" text={block4.textBlock5.title}/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block5Text" text={block4.textBlock5.text}/>
                </div>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        block4: state.landingPage.features.block4,
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock4);