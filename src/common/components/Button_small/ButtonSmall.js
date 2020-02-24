import React, {Component} from 'react';
import PropTypes from 'prop-types';

import s from './ButtonSmall.module.css';
import {connect} from "react-redux";

class ButtonSmall extends Component {

    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        text: '',
        onClick: null,
    }



    render() {
        const { onClick, style, text, language } = this.props;


        return (
                <button className={s.buttonSmall} style={style} onClick={onClick} >
                    {text[language]}
                </button>
        )
    }


}

let mapStateToProps = (state) => {
    return {
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps, {})(ButtonSmall);
