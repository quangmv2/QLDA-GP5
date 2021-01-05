import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./login.scss";

export class Login extends Component {
    constructor(props) {
       super(props)
    }

    async componentDidMount() {
        
    }

    componentDidUpdate(prevProps) {
       
    }

    render() {

        return (
            <div className="fullheight-wrapper flex-center">
                login
            </div>
        );
    }
}


Login.defaultProps = {
    login: () => null,
    errors: {}
};

Login.propTypes = {
    login: PropTypes.func,
    isLogged: PropTypes.bool
};

export default (Login);
