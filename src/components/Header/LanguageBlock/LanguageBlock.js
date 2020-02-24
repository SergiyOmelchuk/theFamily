import React from "react";
import {connect} from "react-redux";
import {changeLanguage} from "../../redux/Landing-reducer";
import "./LanguagesBlock.css";


function LanguageBlock ({language, changeLanguage}) {
    return (
                    <div className="languagesBlock">
                        <span onClick={() => changeLanguage("uk")}
                              className={language == "uk" ? "activeLanguageClass" : null}>UA</span>
                        <span onClick={() => changeLanguage("en")}
                              className={language == "en" ? "activeLanguageClass" : null}>EN</span>
                        <span onClick={() => changeLanguage("ru")}
                              className={language == "ru" ? "activeLanguageClass" : null}>RU</span>
                    </div>
    )
}


let mapStateToProps = (state) => {
    return {
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps, {changeLanguage})(LanguageBlock);