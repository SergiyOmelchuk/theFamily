import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';
import {connect} from "react-redux";
import {updateText} from "../../../components/redux/Landing-reducer";

class Button extends Component {

    static propTypes = {
        text: PropTypes.string,
        className: PropTypes.string,
        blockName: PropTypes.string,
        onClick: PropTypes.func,
        width: PropTypes.number,
        fontSize: PropTypes.string
    }

    static defaultProps = {
        text: '',
        className: "",
        blockName: "",
        onClick: null,
        width: 300,
        fontSize: "15px",
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
        const { editMode, text } = this.state;
        const { onClick, className, style, landingEditMode, language } = this.props;

        const classes = classNames(
            className
        );
        return (
            <div>
                {!landingEditMode &&
                <button  className={classes} style={style} onClick={onClick} >
                    {text[language]}
                </button>
                }
                {landingEditMode && !editMode &&
                <button className={classes} style={style} onDoubleClick={this.activateEditMode}>
                    {text[language]}
                </button>
                }

                {landingEditMode && editMode &&
                <button  className={classes} style={style}>
                            <textarea onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={text[language]}> </textarea>
                </button>
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


export default connect(mapStateToProps, {updateText})(Button);
