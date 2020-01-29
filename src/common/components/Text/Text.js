import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Text.css';

class Text extends Component {

    static propTypes = {
        text: PropTypes.string,
        className: PropTypes.string,
        blockName: PropTypes.string,
    }

    static defaultProps = {
        text: '',
        className: "",
        blockName: "",
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
        const {editMode, text} = this.state;
        const {className, landingEditMode} = this.props;

        const classes = classNames(
            className
        );
        return (
            <div>
                {!landingEditMode &&
                <div className={classes}>
                    {text}
                </div>
                }

                {landingEditMode && !editMode &&
                <div className={classes} onDoubleClick={this.activateEditMode}>
                    {text}
                </div>
                }

                {landingEditMode && editMode &&
                <div className={classes}>
                            <textarea onChange={this.onStatusChange} autoFocus={true}
                                      onBlur={this.deActivateEditMode}
                                      value={text}> </textarea>
                </div>
                }
            </div>
        )
    }


}

export default Text;
