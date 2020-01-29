import React from "react";
import s from "./Reviews.module.css"
import c from "../../common/commonStyles.module.css";


function Title({text}) {
    return (
        <div className={s.reviews}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {text}
            </div>

        </div>
    )
}


export default Title;