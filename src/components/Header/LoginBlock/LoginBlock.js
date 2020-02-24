import React from "react";
import {connect} from "react-redux";


function LoginBlock({loginBlockText, language}) {

    return (
        <a href="sign">{loginBlockText[language]}</a>
    )
}


let mapStateToProps = (state) => {
    return {
        loginBlockText: state.landingPage.loginBlockText,
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps)(LoginBlock);