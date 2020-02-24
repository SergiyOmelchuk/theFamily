import React from "react";
import s from "./Features.module.css";
import c from "../../common/commonStyles.module.css";
import TitleFeatures from "./TitleFeatures/TitleFeatures";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import Text from "../../common/components/Text/Text";
import img1 from "./img/photo_features_1.jpg";
import img2 from "./img/photo_features_2.jpg";
import FeaturesBlock1 from "./Blocks/FeaturesBlock1";
import FeaturesBlock2 from "./Blocks/FeaturesBlock2";
import FeaturesBlock3 from "./Blocks/FeaturesBlock3";
import FeaturesBlock4 from "./Blocks/FeaturesBlock4";


function Features({title, block1 }) {
    return (
        <div className={s.features}>
            <div className={s.titleSection}>
                <div className={s.title}>
                    <Text blockName="featuresTitle" text={title}/>
                </div>
            </div>
            <FeaturesBlock1 />
            <FeaturesBlock2 />
            <FeaturesBlock3 />
            <FeaturesBlock4 />



        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.landingPage.features.title,
        block1: state.landingPage.features.block1,
    };
};

export default connect(mapStateToProps, {updateText})(Features);