import React from "react";
import {connect} from "react-redux";
import Features from "./Features";
import {updateText} from "../redux/Landing-reducer";


let mapStateToProps = (state) => {
    return {
        features: state.landingPage.features
    };
};

const FeaturesContainer = connect(mapStateToProps, {updateText})(Features);

export default FeaturesContainer;