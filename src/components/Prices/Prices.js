import React from "react";
import s from "./Prices.module.css"
import c from "../../common/commonStyles.module.css";
import {connect} from "react-redux";


function Prices({prices}) {
    return (
        <div className={s.prices}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {prices.title}
            </div>
            <div className={s.pricesBlock}>
                {prices.rates.map(rate => {
                    return (
                        <div className={s.item}>
                            <div className={s.item_inner}>
                                <div className={s.item_title}>
                                    {rate.title}
                                </div>
                                <div className={s.item_price}>
                                    <div className={s.item_price_number}>
                                        {rate.price}
                                    </div>
                                    {/*<div className={s.item_price_currency}>*/}
                                    {/*    {rate.currency}*/}
                                    {/*</div>*/}
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