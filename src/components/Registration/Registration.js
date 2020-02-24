import React, { useState } from "react";
import s from "./Registration.module.css";
import Button from "../../common/components/Button/Button";
import {connect} from "react-redux";
import ButtonSmall from "../../common/components/Button_small/ButtonSmall";


function Registration({nextButtonText, facebookLoginButtonText, googleLoginButtonText, language}) {
    const [activeStep, setStep] = useState(1);
    return (
        <div className={s.register}>
            <div className={s.title}>
                Register
            </div>

            <div className={s.itemsBlock} >
                <div className={s.item} onClick={()=> setStep(1)}>
                    <div className={s.itemNumber}>
                        1
                    </div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>
                            Step 1
                        </div>
                    </div>
                </div>
                <div className={s.item} onClick={()=> setStep(2)}>
                    <div className={s.itemNumber}>
                        2
                    </div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>
                            Step 2
                        </div>
                    </div>
                </div>
                <div className={s.item} onClick={()=> setStep(3)}>
                    <div className={s.itemNumber}>
                        3
                    </div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>
                            Step 3
                        </div>
                    </div>
                </div>
            </div>

             {activeStep == 1 &&
            <div className={s.step1}>
                <div>
                    You will always be able to change these data in personal cabinet
                </div>
                <div className={s.inputsBlock}>
                    <div className={s.name}>
                        <span>Bride’s name:</span>
                        <input type={"text"}/>
                    </div>
                    <div className={s.name}>
                        <span>Groom’s name:</span>
                        <input type={"text"}/>
                    </div>
                    <div className={s.date}>
                        <span>Wedding date:</span>
                        <input type={"date"}/>
                    </div>
                    <div className={s.url}>
                        <span>URL:</span>
                        <input type={"text"}/>
                    </div>
                </div>
            </div>
             }
            {activeStep == 2 &&
            <div className={s.step2}>
                <div className={s.socialButtonBlock}>
                    <ButtonSmall text={googleLoginButtonText} onClick={() => alert("Go to google account")}/>
                    <ButtonSmall text={facebookLoginButtonText} onClick={() => alert("Go to Facebook account")}/>
                </div>
                <div className={s.inputsBlock}>
                    <div className={s.name}>
                        <span>E-mail:</span>
                        <input type={"email"}/>
                    </div>
                    <div className={s.name}>
                        <span>Password:</span>
                        <input type={"password"}/>
                    </div>
                    <div className={s.date}>
                        <span>Repeat password:</span>
                        <input type={"password"}/>
                    </div>
                    {/*<div className={}>*/}
                    {/*    <input type={"checkbox"}/>*/}
                    {/*    <span>By creating account you accept our terms, conditions, and privacy police</span>*/}
                    {/*</div>*/}

                </div>
            </div>
            }

            <div className={s.buttonBlock}>
                <Button text={nextButtonText} className="button main" style={{padding: "13px 15px"}}
                        onClick={() => alert("qqq")}/>
            </div>
            <div className={s.loginTextBlock}>
                Do you already have the account? <a href="/sign">Log in here</a>
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        nextButtonText: state.landingPage.registrationForm.nextButtonText,
        language: state.landingPage.language,
        facebookLoginButtonText: state.landingPage.loginForm.facebookLoginButtonText,
        googleLoginButtonText: state.landingPage.loginForm.googleLoginButtonText,
    };
};

export default connect(mapStateToProps)(Registration);
