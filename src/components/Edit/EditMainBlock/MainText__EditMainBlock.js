import React from "react";
import s from "../../Main/Main.module.css";

class MainText__EditMainBlock extends React.Component {

    state = {
        editMode: false,
        text: this.props.mainMainText,
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
                            <textarea wrap="soft" cols="50" rows="2" onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={this.state.text}/>
                </div>
                }
            </div>
        )
    }
}

export default MainText__EditMainBlock;