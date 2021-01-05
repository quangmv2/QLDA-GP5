import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "../Login/login.scss";
import "./signUp.scss";

export class SignUpScreen extends Component {
    constructor(props) {
    }

    async componentDidMount() {}

    componentDidUpdate() {
       
    }

    render() {
        return (
            <div className="fullheight-wrapper flex-center">
            </div>
        );
    }
}

SignUpScreen.defaultProps = {
    login: () => null,
    errors: {}
};

SignUpScreen.propTypes = {
    login: PropTypes.func,
    isLogged: PropTypes.bool
};

export default (SignUpScreen);
