import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Text.css';
import {connect} from "react-redux";
import {updateText} from "../../../components/redux/Landing-reducer";

class Text extends Component {

    static propTypes = {
        text: PropTypes.string,
        blockName: PropTypes.string,
    }

    static defaultProps = {
        text: '',
        blockName: "",
    }
componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.text != this.props.text) {
        this.setState({
            text: this.props.text
        })
    }
}

    state = {
        editMode: false,
        text: this.props.text
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
        this.props.updateText(this.state.text, this.props.blockName, this.props.language);
    }
    onStatusChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }

    render() {
        const {editMode, text} = this.state;
        const { landingEditMode, language} = this.props;


        return (
            <div>
                {!landingEditMode &&
                <div >
                    {text[language]}
                </div>
                }

                {landingEditMode && !editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    {text[language]}
                </div>
                }

                {landingEditMode && editMode &&
                <div>
                            <textarea onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={text[language]}> </textarea>
                </div>
                }
            </div>
        )
    }


}

let mapStateToProps = (state) => {
    return {
        landingEditMode: state.landingPage.landingEditMode,
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps, {updateText})(Text);
