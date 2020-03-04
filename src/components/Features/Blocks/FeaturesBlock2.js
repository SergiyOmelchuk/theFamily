import React from "react";
import s from "../Features.module.css";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import Text from "../../../common/components/Text/Text";
import img1 from ".././img/photo_features_1.jpg";
import img2 from ".././img/photo_features_2.jpg";
import c from "../../../common/commonStyles.module.css";
import Slider from "react-slick";
import "../style.scss";
import slider1 from ".././img/slider1.jpg";
import slider2 from ".././img/slider2.jpg";
import slider3 from ".././img/slider3.jpg";
import slider4 from ".././img/slider4.jpg";
import Button from "../../../common/components/Button/Button";
import TextBlock from "../../../common/components/TextBlock/TextBlock";


function FeaturesBlock2({block2, mainMainButtonText}) {

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
        <div className={s.block2}>
            <div className={s.block2_title}>
                <Text blockName="featuresBlock2Title"
                      text={block2.title}
                      className="title"/>
            </div>
                {
                block2.textBlocks.map(
                    (item) => (
                        <TextBlock
                            classOfBlock={`${s["block2_text" + item._id]}`}
                            titleText={item.title}
                            text={item.text}
                            textColor={"f1e1ca"}
                        />

                    )
                )
            }
            <div className="sliderFeatures">
                <Slider  {...settings}>
                    {
                        block2.textBlocks.map(
                            (item) => (
                                <TextBlock
                                    // classOfBlock={`${s["block2_text" + item._id]}`}
                                    titleText={item.title}
                                    text={item.text}
                                    textColor={"f1e1ca"}
                                    photoSrc={item.photo}
                                    buttonText={mainMainButtonText}
                                    mobile
                                />

                            )
                        )
                    }

                </Slider>
            </div>



            {/*<div className="sliderFeatures">*/}
            {/*    <Slider  {...settings}>*/}
            {/*        <div className={s.block2_text1}>*/}
            {/*            <div className={s.photoSlider}>*/}
            {/*                <img src={slider4} alt=""/>*/}
            {/*                <div className={s.photo_rightShadowElement}></div>*/}
            {/*            </div>*/}
            {/*            <div className={s.titleText}>*/}
            {/*                <Text blockName="featuresBlock2Block1Title"*/}
            {/*                      text={block2.textBlock1.title}*/}
            {/*                      className="blockTitle"/>*/}
            {/*            </div>*/}
            {/*            <div className={s.text}>*/}
            {/*                <Text blockName="featuresBlock2Block1Text"*/}
            {/*                      text={block2.textBlock1.text}*/}
            {/*                      color={"f1e1ca"}*/}
            {/*                      className="text"/>*/}
            {/*            </div>*/}
            {/*            <div className={s.buttonBlock}>*/}
            {/*                <Button className="button secondary"*/}
            {/*                        onClick={() => alert("Hello world")}*/}
            {/*                        blockName="mainMainButtonText"*/}
            {/*                        text={mainMainButtonText}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={s.block2_text2}>*/}
            {/*            <div className={s.photoSlider}>*/}
            {/*                <img src={slider3} alt=""/>*/}
            {/*                <div className={s.photo_rightShadowElement}></div>*/}
            {/*            </div>*/}
            {/*            <div className={s.titleText}>*/}
            {/*                <Text blockName="featuresBlock2Block2Title"*/}
            {/*                      text={block2.textBlock2.title}*/}
            {/*                      className="blockTitle"/>*/}
            {/*            </div>*/}
            {/*            <div className={s.text}>*/}
            {/*                <Text blockName="featuresBlock2Block2Text"*/}
            {/*                      text={block2.textBlock2.text}*/}
            {/*                      color={"f1e1ca"}*/}
            {/*                      className="text"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className={s.block2_text3}>*/}
            {/*            <div className={s.photoSlider}>*/}
            {/*                <img src={slider1} alt=""/>*/}
            {/*                <div className={s.photo_rightShadowElement}></div>*/}
            {/*            </div>*/}
            {/*            <div className={s.titleText}>*/}
            {/*                <Text blockName="featuresBlock2Block3Title"*/}
            {/*                      text={block2.textBlock3.title}*/}
            {/*                      className="blockTitle"/>*/}
            {/*            </div>*/}
            {/*            <div className={s.text}>*/}
            {/*                <Text blockName="featuresBlock2Block3Text"*/}
            {/*                      text={block2.textBlock3.text}*/}
            {/*                      color={"f1e1ca"}*/}
            {/*                      className="text"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={s.block2_text4}>*/}
            {/*            <div className={s.photoSlider}>*/}
            {/*                <img src={slider2} alt=""/>*/}
            {/*                <div className={s.photo_rightShadowElement}></div>*/}
            {/*            </div>*/}
            {/*            <div className={s.titleText}>*/}
            {/*                <Text blockName="featuresBlock2Block4Title"*/}
            {/*                      text={block2.textBlock4.title}*/}
            {/*                      className="blockTitle"/>*/}
            {/*            </div>*/}
            {/*            <div className={s.text}>*/}
            {/*                <Text blockName="featuresBlock2Block4Text"*/}
            {/*                      text={block2.textBlock4.text}*/}
            {/*                      color={"f1e1ca"}*/}
            {/*                      className="text"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Slider>*/}
            {/*</div>*/}

        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        block2: state.landingPage.features.block2,
        mainMainButtonText: state.landingPage.mainBlock.mainMainButtonText
    };
};

export default connect(mapStateToProps, {updateText})(FeaturesBlock2);