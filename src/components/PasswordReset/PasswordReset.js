import React from "react";
import s from "./PasswordReset.module.css";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import Button from "../../common/components/Button/Button";
import ButtonSmall from "../../common/components/Button_small/ButtonSmall";


function PasswordReset({title, text, emailText, buttonText, backButtonText, language}) {
    return (
        <div className={s.passwordResetForm}>
            <div className={s.passwordResetBlock}>
                <div className={s.passwordResetBlock_innerWrapper}>
                    <div className={s.title}>
                        {title[language]}
                    </div>
                    <div className={s.text}>
                        {text[language]}
                    </div>
                    <div className={s.email}>
                        <input placeholder={emailText[language]} type={"email"}/>
                    </div>

                    <div className={s.buttonBlock}>
                        <Button text={backButtonText} className="button secondary"
                                style={{width: "150px", padding: "13px 15px", margin: "0 5px"}}
                                onClick={() => alert("Go to Previous Page")}/>
                        <Button text={buttonText} className="button main"
                                style={{width: "150px", padding: "13px 15px", margin: "0 5px"}}
                                onClick={() => alert("Go to AfterPasswordReset Page")}/>
                    </div>
                </div>
            </div>

        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        language: state.landingPage.language,
        title: state.landingPage.PasswordResetForm.title,
        text: state.landingPage.PasswordResetForm.text,
        buttonText: state.landingPage.PasswordResetForm.buttonText,
        backButtonText: state.landingPage.PasswordResetForm.backButtonText,
        emailText: state.landingPage.loginForm.emailText,
    };
};

export default connect(mapStateToProps, {updateText})(PasswordReset);