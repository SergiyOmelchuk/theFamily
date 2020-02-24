import React from "react";
import s from "./LoginForm.module.css";
import {connect} from "react-redux";
import {updateText, updateWow} from "../redux/Landing-reducer";
import Button from "../../common/components/Button/Button";
import ButtonSmall from "../../common/components/Button_small/ButtonSmall";


function LoginForm({
                       facebookLoginButtonText, googleLoginButtonText, titleText, emailText,
                       passwordText, rememberMeText, forgetPasswordText, dontHaveText,
                       signInText, language, wow, updateWow
                   }) {
    return (
            <div className={s.loginForm}>

                <div className={s.socialButtonBlock}>
                    <ButtonSmall text={googleLoginButtonText} onClick={() => alert("Go to google account")}/>
                    <ButtonSmall text={facebookLoginButtonText} onClick={() => alert("Go to Facebook account")}/>
                </div>
                <div className={s.emailLoginBlock}>
                    <div className={s.emailLoginBlock_innerWrapper}>
                        <div className={s.title}>
                            {titleText[language]}
                        </div>
                        <div className={s.email}>
                            <span>{emailText[language]}: </span>
                            <input type={"email"}/>
                        </div>
                        <div className={s.password}>
                            <span>{passwordText[language]}:</span>
                            <input type={"password"}/>
                        </div>
                        <div className={s.bottomBlockContainer}>
                            <div className={s.bottomBlock}>
                                <div className={s.rememberMe}>
                                    <input type={"checkbox"}/> {rememberMeText[language]}
                                </div>
                                <div className={s.forgetPass}>
                                    <a href="/password-reset">{forgetPasswordText[language]}</a>
                                </div>
                            </div>

                        </div>
                        <div className={s.loginButton}>
                            <Button text={titleText} className="button main" style={{padding: "13px 15px"}}
                                    onClick={updateWow}/>
                            {/*<ButtonSmall text={titleText} onClick={() => alert("Go to Login")}/>*/}
                        </div>
                    </div>
                </div>
                <div className={s.signUpBlock}>
                    {dontHaveText[language]} <a href={"/registration"}>{signInText[language]}</a>
                </div>

            </div>
    )
}


let mapStateToProps = (state) => {
    return {
        language: state.landingPage.language,
        facebookLoginButtonText: state.landingPage.loginForm.facebookLoginButtonText,
        googleLoginButtonText: state.landingPage.loginForm.googleLoginButtonText,
        signInText: state.landingPage.loginForm.signInText,
        dontHaveText: state.landingPage.loginForm.dontHaveText,
        forgetPasswordText: state.landingPage.loginForm.forgetPasswordText,
        rememberMeText: state.landingPage.loginForm.rememberMeText,
        passwordText: state.landingPage.loginForm.passwordText,
        emailText: state.landingPage.loginForm.emailText,
        titleText: state.landingPage.loginForm.titleText,
        wow: state.landingPage.wow,
    };
};

export default connect(mapStateToProps, {updateText, updateWow})(LoginForm);