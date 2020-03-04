import React from "react";
import s from "./Prices.module.css"
import c from "../../common/commonStyles.module.css";
import {connect} from "react-redux";
import Slider from "react-slick";
import "./Prices.scss";


function Prices({prices}) {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
    }
    return (
        <div className={s.prices}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {prices.title}
            </div>
            <div className={s.pricesBlock}>
                {prices.rates.map(rate => {
                    return (
                        <div id={s[`item-${rate._id}`]} className={s.item}>
                            <div className={s.item_inner}>
                                <div className={s.item_title}>
                                    {rate.title}
                                </div>
                                <div className={s.item_price}>
                                    <div className={s.item_price_number}>
                                        {rate.price}
                                    </div>
                                    <div className={s.item_price_period}>
                                        {rate.period}
                                    </div>
                                </div>
                                <ul className={s.item_description}>
                                    {rate.features.map(el => {
                                        return (
                                            <li>{el}</li>
                                        )
                                    })}
                                </ul>
                                <div className={s.button_block}>
                                    <button
                                        className={`${s.buttonBuy} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>create
                                        site
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}


let mapStateToProps = (state) => {
    return {
        prices: state.landingPage.prices
    };
};

export default connect(mapStateToProps,)(Prices);