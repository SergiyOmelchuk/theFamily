import React from "react";
import s from "./HowItWork.module.css"
import c from "../../common/commonStyles.module.css";


function HowItWork() {
    return (
        <div className={s.howItWork}>
            <div className={`${s.title} ${c.titleCommon}`}>
                How it works
            </div>
            <div className={s.itemsBlock}>
                <div className={s.item}>
                    <div className={s.itemNumber}>1</div>
                    <div className={s.itemTitle}>SIGN UP</div>
                    <div className={s.itemText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>2</div>
                    {/*<div className={s.itemTitle}>CHOOSE A DESIGN</div>*/}
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>CHOOSE A DESIGN</div>
                        <div className={s.itemText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>3</div>
                    <div className={s.itemTitle}>PICK A PLAN</div>
                    {/*<div className={s.itemHoverText}>*/}
                    {/*    <div className={s.itemTitle}>CHOOSE A DESIGN</div>*/}
                    {/*    <div className={s.itemText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do*/}
                    {/*        eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>4</div>
                    <div className={s.itemTitle}>CUSTOMIZE SITE</div>
                    <div className={s.itemText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>5</div>
                    <div className={s.itemTitle}>SHARE</div>
                    <div className={s.itemText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;