import React from "react";
import s from "./HowItWork.module.css";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import Text from "../../common/components/Text/Text";


function HowItWork({howItWorks, language}) {
    return (
        <div className={s.howItWork}>
            <div className={s.title}>
                <Text blockName="howItWorkTitle"
                      text={howItWorks.title}
                      className="title"/>
            </div>
            <div className={s.itemsBlock}>
                    <div className={s.item}>
                        <div className={s.itemNumber}>
                            <div>{howItWorks.block1.number[language]}</div>

                        </div>
                        <div className={s.itemHoverText}>
                            <div className={s.itemTitle}>
                                {howItWorks.block1.title[language]}
                            </div>
                            <div className={s.itemText}>
                                {howItWorks.block1.text[language]}
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemNumber}>
                            {howItWorks.block2.number[language]}
                        </div>
                        <div className={s.itemHoverText}>
                            <div className={s.itemTitle}>
                                {howItWorks.block2.title[language]}
                            </div>
                            <div className={s.itemText}>
                                {howItWorks.block2.text[language]}
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemNumber}>{howItWorks.block3.number[language]}</div>
                        <div className={s.itemHoverText}>
                            <div className={s.itemTitle}>{howItWorks.block3.title[language]}</div>
                            <div className={s.itemText}>
                                {howItWorks.block3.text[language]}
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemNumber}>{howItWorks.block4.number[language]}</div>
                        <div className={s.itemHoverText}>
                            <div className={s.itemTitle}>{howItWorks.block4.title[language]}</div>
                            <div className={s.itemText}>
                                {howItWorks.block4.text[language]}
                            </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemNumber}>{howItWorks.block5.number[language]}</div>
                        <div className={s.itemHoverText}>
                            <div className={s.itemTitle}>{howItWorks.block5.title[language]}</div>
                            <div className={s.itemText}>
                                {howItWorks.block5.text[language]}
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        howItWorks: state.landingPage.howItWorks,
        language: state.landingPage.language
    };
};

export default connect(mapStateToProps, {updateText})(HowItWork);


