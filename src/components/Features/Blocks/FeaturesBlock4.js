import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import c from "../../../common/commonStyles.module.css";
import Text from "../../../common/components/Text/Text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.scss";


function FeaturesBlock4({block4}) {
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
        <div className={s.block4}>
            <div className={s.block4_title}>
                <Text blockName="featuresBlock4Title"
                      text={block4.title}
                      className="title"/>
            </div>
            <div className={s.block4_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block1Title"
                          text={block4.textBlock1.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block1Text"
                          text={block4.textBlock1.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block4_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block2Title"
                          text={block4.textBlock2.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block2Text"
                          text={block4.textBlock2.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block4_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block3Title"
                          text={block4.textBlock3.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block3Text"
                          text={block4.textBlock3.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block4_text4}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block4Title"
                          text={block4.textBlock4.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block4Text"
                          text={block4.textBlock4.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block4_text5}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock4Block5Title"
                          text={block4.textBlock5.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock4Block5Text"
                          text={block4.textBlock5.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className="slider">
                <Slider {...settings}>
                    <div className={s.block4_text1}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock4Block1Title"
                                  text={block4.textBlock1.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock4Block1Text"
                                  text={block4.textBlock1.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block4_text2}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock4Block2Title"
                                  text={block4.textBlock2.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock4Block2Text"
                                  text={block4.textBlock2.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block4_text3}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock4Block3Title"
                                  text={block4.textBlock3.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock4Block3Text"
                                  text={block4.textBlock3.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block4_text4}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock4Block4Title"
                                  text={block4.textBlock4.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock4Block4Text"
                                  text={block4.textBlock4.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block4_text5}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock4Block5Title"
                                  text={block4.textBlock5.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock4Block5Text"
                                  text={block4.textBlock5.text}
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
        block4: state.landingPage.features.block4,
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock4);