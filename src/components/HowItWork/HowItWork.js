import React from "react";
import s from "./HowItWork.module.css"
import c from "../../common/commonStyles.module.css";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";


function HowItWork(props) {
    return (
        <div className={s.howItWork}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {props.howItWorks.title}
            </div>
            <div className={s.itemsBlock}>
                <div className={s.item}>
                    <div className={s.itemNumber}>
                        {props.howItWorks.block1.number}
                    </div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>
                            {props.howItWorks.block1.title}
                        </div>
                        <div className={s.itemText}>
                            {props.howItWorks.block1.text}
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>
                        {props.howItWorks.block2.number}
                    </div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>
                            {props.howItWorks.block2.title}
                        </div>
                        <div className={s.itemText}>
                            {props.howItWorks.block2.text}
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>{props.howItWorks.block3.number}</div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>{props.howItWorks.block3.title}</div>
                        <div className={s.itemText}>
                            {props.howItWorks.block3.text}
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>{props.howItWorks.block4.number}</div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>{props.howItWorks.block4.title}</div>
                        <div className={s.itemText}>
                            {props.howItWorks.block4.text}
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.itemNumber}>{props.howItWorks.block5.number}</div>
                    <div className={s.itemHoverText}>
                        <div className={s.itemTitle}>{props.howItWorks.block5.title}</div>
                        <div className={s.itemText}>
                            {props.howItWorks.block5.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        howItWorks: state.landingPage.howItWorks
    };
};

export default connect(mapStateToProps, {updateText})(HowItWork);


