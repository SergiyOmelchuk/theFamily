import React from "react";
import Slider from "react-slick";
import s from "./Designs.module.css"
import c from "../../common/commonStyles.module.css";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import CardOfDesigns from "./CardOfDesign";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "../../common/components/Text/Text";


class Designs extends React.Component {
    state = {
        designs: this.props.designs,
        activeDesign: this.props.designs[0]
    }

    nextProperty = () => {
        const newIndex = this.state.activeDesign._id + 1;
        this.setState({
            activeDesign: this.props.designs[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.activeDesign._id - 1;
        this.setState({
            activeDesign: this.props.designs[newIndex]
        })
    }

    render () {
        const {designs, activeDesign} = this.state;

        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div id="designs" className={s.designs}>
                <div className={s.title}>
                    <Text blockName="designsTitle"
                          text={this.props.title}
                          className="title"/>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            designs.map(item => <CardOfDesigns key={item._id} designs={item}/>)
                        }
                    </Slider>
                </div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        designs: state.landingPage.designs.designsArr,
        title: state.landingPage.designs.title,

    };
};

export default connect(mapStateToProps)(Designs);