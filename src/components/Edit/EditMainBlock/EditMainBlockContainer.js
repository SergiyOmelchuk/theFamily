import React from "react";
import {connect} from "react-redux";
import {updateText} from "../../redux/Landing-reducer";
import EditMainBlock from "./EditMainBlock";


let mapStateToProps = (state) => {
    return {
        mainTitle: state.landingPage.mainBlock.mainTitle,
        mainMainText: state.landingPage.mainBlock.mainMainText,
        mainText: state.landingPage.mainBlock.mainText,
        mainMainButtonText: state.landingPage.mainBlock.mainMainButtonText,
        mainSecondaryButtonText: state.landingPage.mainBlock.mainSecondaryButtonText,
        editMode: state.landingPage.editMode
    };
};

const EditMainBlockContainer = connect(mapStateToProps, {updateText})(EditMainBlock);

export default EditMainBlockContainer;