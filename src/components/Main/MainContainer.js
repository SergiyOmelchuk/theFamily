import React from "react";
import Main from "./Main";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        mainTitle: state.landingPage.mainBlock.mainTitle,
        mainMainText: state.landingPage.mainBlock.mainMainText,
        mainText: state.landingPage.mainBlock.mainText,
        mainMainButtonText: state.landingPage.mainBlock.mainMainButtonText,
        mainSecondaryButtonText: state.landingPage.mainBlock.mainSecondaryButtonText
    };
};
let mapDispatchToProps = (dispatch) => {
    return;
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;