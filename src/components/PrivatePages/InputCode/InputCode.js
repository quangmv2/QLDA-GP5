import React, { Component } from "react";
import "./inputCode.scss";

export class InputCode extends Component {

    static contextType = NavigatorContext;

    constructor(props) {
        
    }

    render() {
        return (
            <div className="fullheight-wrapper flex-center">
                <p>InputCode</p>
            </div>
        );
    }
}


export default (InputCode);
