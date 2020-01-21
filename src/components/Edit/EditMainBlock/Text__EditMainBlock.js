import React from "react";
import s from "../../Main/Main.module.css";


class Text__EditMainBlock extends React.Component {

    state = {
        editMode: false,
        text: this.props.mainText,
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
                <div onDoubleClick={this.activateEditMode}>
                    {this.state.text}
                </div>
                }

                {this.state.editMode &&
                <div>
                            <textarea className={s.textaaa} onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={this.state.text}> </textarea>
                </div>
                }
            </div>
        )
    }
}

export default Text__EditMainBlock;