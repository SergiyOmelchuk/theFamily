import React from "react";
import s from "./Prices.module.css"
import c from "../../common/commonStyles.module.css";


function Prices() {
    return (
        <div className={s.prices}>
            <div className={ `${s.title} ${c.titleCommon}` }>
                Our plans
            </div>
            <div className={s.pricesBlock}>
                <div className={s.item}>
                    <div className={s.item_inner}>
                        <div className={s.item_title}>
                            Diamond
                        </div>
                        <div className={s.item_price}>
                            <div className={s.item_price_number}>
                                100
                            </div>
                            <div className={s.item_price_currency}>
                                $
                            </div>
                            <div className={s.item_price_period}>
                                /year
                            </div>
                        </div>
                        <div className={s.item_description}>

                        </div>
                        <div className={s.button_block}>
                            <button className={`${s.buttonBuy} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>create
                                site
                            </button>
                        </div>
                    </div>
                </div>
                <div id={s.item2} className={s.item}>
                    <div className={s.item_inner}>
                        <div className={s.item_title}>
                            Diamond
                        </div>
                        <div className={s.item_price}>
                            <div className={s.item_price_number}>
                                100
                            </div>
                            <div className={s.item_price_currency}>
                                $
                            </div>
                            <div className={s.item_price_period}>
                                /year
                            </div>
                        </div>
                        <div className={s.item_description}>

                        </div>
                        <div className={s.button_block}>
                            <button className={`${s.buttonBuy} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>create
                                site
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_inner}>
                        <div className={s.item_title}>
                            Diamond
                        </div>
                        <div className={s.item_price}>
                            <div className={s.item_price_number}>
                                100
                            </div>
                            <div className={s.item_price_currency}>
                                $
                            </div>
                            <div className={s.item_price_period}>
                                /year
                            </div>
                        </div>
                        <div className={s.item_description}>

                        </div>
                        <div className={s.button_block}>
                            <button className={`${s.buttonBuy} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>create
                                site
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;