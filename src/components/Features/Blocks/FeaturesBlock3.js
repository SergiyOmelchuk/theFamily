import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/features_block3_photo1.jpg";
import img2 from ".././img/features_block3_photo2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.scss";


function FeaturesBlock3({block3}) {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: true

    };

    return (
        <div className={s.block3}>
            <div className={s.block3_title}>
                <Text blockName="featuresBlock3Title"
                      text={block3.title}
                      className="title"/>
            </div>
            <div className={s.block3_text1}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block1Title"
                          text={block3.textBlock1.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block1Text"
                          text={block3.textBlock1.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className={s.block3_text2}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block2Title"
                          text={block3.textBlock2.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block2Text"
                          text={block3.textBlock2.text}
                              color={"f1e1ca"}
                              className="text"/>
                </div>
            </div>
            <div className={s.block3_text3}>
                <div className={s.titleText}>
                    <Text blockName="featuresBlock3Block3Title"
                          text={block3.textBlock3.title}
                          className="blockTitle"/>
                </div>
                <div className={s.text}>
                    <Text blockName="featuresBlock3Block3Text"
                          text={block3.textBlock3.text}
                          color={"f1e1ca"}
                          className="text"/>
                </div>
            </div>
            <div className="sliderFeatures">
                <Slider  {...settings} >
                    <div className={s.block3_text1}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock3Block1Title"
                                  text={block3.textBlock1.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock3Block1Text"
                                  text={block3.textBlock1.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block3_text2}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock3Block2Title"
                                  text={block3.textBlock2.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock3Block2Text"
                                  text={block3.textBlock2.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                    <div className={s.block3_text3}>
                        <div className={s.titleText}>
                            <Text blockName="featuresBlock3Block3Title"
                                  text={block3.textBlock3.title}
                                  className="blockTitle"/>
                        </div>
                        <div className={s.text}>
                            <Text blockName="featuresBlock3Block3Text"
                                  text={block3.textBlock3.text}
                                  color={"f1e1ca"}
                                  className="text"/>
                        </div>
                    </div>
                </Slider>
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