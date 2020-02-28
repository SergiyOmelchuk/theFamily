import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/photo_features_1.jpg";
import img2 from ".././img/photo_features_2.jpg";
import c from "../../../common/commonStyles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.scss";


function FeaturesBlock2({block2}) {

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

    };

    return (
        <div className={s.block2}>
            <div className={s.block2_title}>
                <Text blockName="featuresBlock2Title"
                      text={block2.title}
                      className="title"/>
            </div>
            <div className={s.block2_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block1Title"
                          text={block2.textBlock1.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block1Text"
                          text={block2.textBlock1.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block2_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block2Title"
                          text={block2.textBlock2.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block2Text"
                          text={block2.textBlock2.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>

            <div className={s.block2_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block3Title"
                          text={block2.textBlock3.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block3Text"
                          text={block2.textBlock3.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block2_text4}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock2Block4Title"
                          text={block2.textBlock4.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock2Block4Text"
                          text={block2.textBlock4.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className="slider">
                <Slider  {...settings}>
                    <div className={s.block2_text1}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock2Block1Title"
                                  text={block2.textBlock1.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock2Block1Text"
                                  text={block2.textBlock1.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block2_text2}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock2Block2Title"
                                  text={block2.textBlock2.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock2Block2Text"
                                  text={block2.textBlock2.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>

                    <div className={s.block2_text3}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock2Block3Title"
                                  text={block2.textBlock3.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock2Block3Text"
                                  text={block2.textBlock3.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block2_text4}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock2Block4Title"
                                  text={block2.textBlock4.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock2Block4Text"
                                  text={block2.textBlock4.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                </Slider>
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