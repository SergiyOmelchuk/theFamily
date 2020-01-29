import React from "react";
import s from "./Certificate.module.css"
import {connect} from "react-redux";
import c from "../../common/commonStyles.module.css";
import img from "./img/certificate_img.png";


function Certificate({certificate}) {
    return (
        <div className={s.certificate}>
            <div className={`${s.title} ${c.titleCommon}`}>
                {certificate.title}
            </div>
            <div className={s.text}>
                {certificate.text}
            </div>
            <div className={s.img}>
                <img src={img} alt=""/>
            </div>
            <div className={s.button}>
                <button className={`${s.buttonBuyCertificate} ${c.buttonCommon} ${c.buttonMainCommon}`}>
                    {certificate.buttonText}
                </button>
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        certificate: state.landingPage.certificate
    };
};

export default connect(mapStateToProps,)(Certificate);
