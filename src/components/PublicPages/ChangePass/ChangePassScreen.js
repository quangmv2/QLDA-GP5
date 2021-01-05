import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class ChangePassScreen extends Component {
    constructor(props) {
       
    }

    render() {
        

        return (
            <div className="fullheight-wrapper flex-center">
            </div>
        );
    }
}

ChangePassScreen.defaultProps = {
    login: () => null,
    errors: {}
};

ChangePassScreen.propTypes = {
    login: PropTypes.func,
    isLogged: PropTypes.bool
};

export default ChangePassScreen;
