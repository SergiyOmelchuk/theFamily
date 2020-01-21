import React from "react";


class TitleFeatures extends React.Component {
    state = {
        editMode: false,
        text: this.props.text,
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

export default TitleFeatures;