import React from "react";
import s from "./Reviews.module.css"
import {connect} from "react-redux";
import c from "../../common/commonStyles.module.css";


function Reviews({reviews}) {
    return (
        <div className={s.reviews}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {reviews.title}
            </div>
            <div className={s.reviewsBlock}>
                {reviews.reviews.map(item => {
                    return (
                        <div className={s.item}>
                            <div className={s.imgBlock}>
                                <img src={"./img/photo1.jpg"} alt=""/>
                            </div>
                            <div className={s.text}>
                                {item.text}
                            </div>
                            <div className={s.name}>
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={s.buttonBlock}>
                <button className={`${s.button} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>
                    {reviews.buttonText}
                </button>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        reviews: state.landingPage.reviews
    };
};

export default connect(mapStateToProps,)(Reviews);