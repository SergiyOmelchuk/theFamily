import React from "react";
import c from "../../../common/commonStyles.module.css";

class Title__EditMainBlock extends React.Component {

    state = {
        editMode: false,
        text: this.props.mainTitle,
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
        this.props.updateText(this.state.text);
    }
    onStatusChange = (e) => {
        this.setState({
            text: e.currentTarget.value
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
                {!this.state.editMode &&
                <div className={c.titleCommon} onDoubleClick={this.activateEditMode}>
                    {this.state.text}
                </div>
                }

                {this.state.editMode &&
                <div className={c.titleCommon}>
                            <textarea onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                                      value={this.state.text}/>
                </div>
                }
            </div>
        )
    }
}

export default Title__EditMainBlock;