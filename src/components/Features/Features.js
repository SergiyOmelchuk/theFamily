import React from "react";
import s from "./Features.module.css";
import c from "../../common/commonStyles.module.css";
import TitleFeatures from "./TitleFeatures/TitleFeatures";
import {connect} from "react-redux";
import {updateText} from "../redux/Landing-reducer";
import Text from "../../common/components/Text/Text";
import img1 from "./img/photo_features_1.jpg";
import img2 from "./img/photo_features_2.jpg";
import FeaturesBlock1 from "./Blocks/FeaturesBlock1";
import FeaturesBlock2 from "./Blocks/FeaturesBlock2";
import FeaturesBlock3 from "./Blocks/FeaturesBlock3";
import FeaturesBlock4 from "./Blocks/FeaturesBlock4";
import ReactPlayer from "react-player";
import slider1 from "./img/slider.jpg";
import "./style.scss"


function Features({title, block1}) {

    return (
        <div className={s.features}>

            <div  className={s.player}>
                <ReactPlayer
                    url='https://www.facebook.com/thefamilycloud/videos/574572039719595/?__tn__=kC-R&eid=ARBMxpzU81nJTakbBkW60rdC89PCPsRoYIFIyXjFEiS_xJORV8yGpY6FjYZ-zBSstUEoS-KpdGzegCTa&hc_ref=ARSk4cukxwMipp9H-piTcoXThE805SrgxrfCJLOP27jJ34qZcp2Mn6-AA8GIuBxmYL0&__xts__[0]=68.ARCIICPq_wxjE6FujIFYdb-mcke_noZ_iafekjPqeEwIdPvR26opEyYgtHokNyL_c7mTSUEnX0t577Dx6Q7gf3CMOS_M_QcOhv8oRU2deVkcTq9Y4724ezzxTHWkmhPCxCwAVZPiiH2yRPSblVsAUX7R3YBifIWA28LocN6xhD4R7mspDifcTLaeY4PSKe4iPbHQ6dfkEGifegQdWHIHAQpIqF4pJzKuIfx2TGFj2tgV0CInAUvUoOLm7U-Vy3CRfw_tqLIKrnOXgNRjOe8giGcp_tcL8Epvvh4s51B0JwE5x1Jz0VQ'
                    controls
                    light={slider1}
                    // className={s.reactPlayer}
                    playing
                    width="100%"
                    height='100%'
                    style={{
                        boxShadow: "5px 3px 10px 5px rgba(227, 197, 151, 0.75)",
                        border: "2px solid #8f704c",
                        // margin: "50px auto 100px auto",
                        width: "300px"
                    }}
                    volume={0.5}
                />
            </div>
            <div className={s.titleSection}>
                <div className={s.title}>
                    <Text blockName="featuresTitle"
                          text={title}
                          className="title"/>
                </div>
            </div>


            <FeaturesBlock1/>
            <FeaturesBlock2/>
            <FeaturesBlock3/>
            <FeaturesBlock4/>


        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        title: state.landingPage.features.title,
        block1: state.landingPage.features.block1,
    };
};

export default connect(mapStateToProps, {updateText})(Features);