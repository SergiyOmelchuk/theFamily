import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

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
        debugger
        this.props.updateText(this.state.text, this.props.blockName);
    }
    onStatusChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }



    render() {
        const { editMode, text } = this.state;
        const { onClick, className, style, landingEditMode } = this.props;

        const classes = classNames(
            className
        );
        return (
            <div>
                {!landingEditMode &&
                <div  className={classes} style={style}onClick={onClick} >
                    {text}
                </div>
                }
                {landingEditMode && !editMode &&
                <div className={classes} style={style} onDoubleClick={this.activateEditMode}>
                    {text}
                </div>
                }

                {landingEditMode && editMode &&
                <div  className={classes} style={style}>
                            <textarea onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={text}> </textarea>
                </div>
                }
            </div>
        )
    }


}

export default Button;
