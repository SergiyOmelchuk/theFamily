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
                {
                    howItWorks.items.map( item => {
                       return ( <div className={s.item}>
                            <div className={s.itemNumber}>
                                <div>{item._id}</div>
                            </div>
                            <div className={s.itemHoverText}>
                                <div className={s.itemTitle}>
                                    {item.title[language]}
                                </div>
                                <div className={s.itemText}>
                                    <Text blockName={`howItWorksBlock${item._id}Text`}
                                          text={item.text}
                                          className="text"/>
                                </div>
                            </div>
                        </div>
                       )
                    })
                }

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


