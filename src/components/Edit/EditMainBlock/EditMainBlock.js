import React from "react";
import s from "../../Main/Main.module.css";
import c from "../../../common/commonStyles.module.css";
import Title__EditMainBlock from "./Title__EditMainBlock";
import MainText__EditMainBlock from "./MainText__EditMainBlock";
import Text__EditMainBlock from "./Text__EditMainBlock";
import MainButtonText__EditMainBlock from "./MainButtonText__EditMainBlock";
import SecondaryButtonText__EditMainBlock from "./SecondaryButtonText__EditMainBlock";


class EditMainBlock extends React.Component {

    state = {
        editMode: false,
        editModeTitle: false,
        mainTitle: this.props.mainTitle,
        mainMainText: this.props.mainMainText
    }

    activateEditMode = (editor) => {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateText(this.state.mainTitle);
    }
    onStatusChange = (e) => {
        this.setState({
            mainTitle: e.currentTarget.value
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.status != this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render = () => {
        return (
            <div>
                {!this.props.editMode &&
                <div id="main" className={s.main}>
                    <div id="textBlock" className={s.textBlock}>
                        <div className={`${c.titleCommon}  ${c.hoverBorderInEditMode}`}>
                            <Title__EditMainBlock props={this.props} updateText={this.props.updateText}/>
                        </div>
                        <div className={`${s.mainText}  ${c.hoverBorderInEditMode}`}>
                            <MainText__EditMainBlock mainMainText={this.props.mainMainText}
                                                     updateText={this.props.updateText}/>
                        </div>
                        <div className={`${s.text} ${c.hoverBorderInEditMode}`}>
                            <Text__EditMainBlock mainText={this.props.mainText} updateText={this.props.updateText}/>
                        </div>
                    </div>
                    <div className={s.buttonBlock}>
                        <button className={`${s.buttonChooseDesign} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>
                            <MainButtonText__EditMainBlock mainMainButtonText={this.props.mainMainButtonText}
                                                           updateText={this.props.updateText}/>
                        </button>
                        <button id="button" className={`${s.buttonCreateSite} ${c.buttonCommon} ${c.buttonMainCommon}`}>
                            <SecondaryButtonText__EditMainBlock
                                mainSecondaryButtonText={this.props.mainSecondaryButtonText}
                                updateText={this.props.updateText}/>
                        </button>
                    </div>
                </div>
                }

                {this.props.editMode &&
                <div id="main" className={ `${s.main} ${s.editMode}` }>
                    <div id="textBlock" className={s.textBlock}>
                        <div className={`${c.titleCommon}  ${c.hoverBorderInEditMode}`}>
                            <Title__EditMainBlock mainTitle={this.props.mainTitle} updateText={this.props.updateText}/>
                        </div>
                        <div className={`${s.mainText}  ${c.hoverBorderInEditMode}`}>
                            <MainText__EditMainBlock mainMainText={this.props.mainMainText}
                                                     updateText={this.props.updateText}/>
                        </div>
                        <div className={`${s.text} ${c.hoverBorderInEditMode}`}>
                            <Text__EditMainBlock mainText={this.props.mainText} updateText={this.props.updateText}/>
                        </div>
                    </div>
                    <div className={s.buttonBlock}>
                        <button className={`${s.buttonChooseDesign} ${c.buttonCommon} ${c.buttonSecondaryCommon}`}>
                            <MainButtonText__EditMainBlock mainMainButtonText={this.props.mainMainButtonText}
                                                           updateText={this.props.updateText}/>
                        </button>
                        <button id="button" className={`${s.buttonCreateSite} ${c.buttonCommon} ${c.buttonMainCommon}`}>
                            <SecondaryButtonText__EditMainBlock
                                mainSecondaryButtonText={this.props.mainSecondaryButtonText}
                                updateText={this.props.updateText}/>
                        </button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default EditMainBlock;