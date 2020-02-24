import React from "react";
import {connect} from "react-redux";


function NavMenu({navMenu, language, list}) {
    const Tag = list ? 'li' : 'div';
    const Block = list ? 'ul' : 'div';
    return (
        <Block>
            {navMenu.map(item => {
                return (
                    <Tag>
                        <a href={item.href}>{item.title[language]}
                        </a>
                    </Tag>
                )
            })}
        </Block>
    )
}

let mapStateToProps = (state) => {
    return {
        navMenu: state.landingPage.navMenu,
        language: state.landingPage.language
    };
};


export default connect(mapStateToProps,)(NavMenu);