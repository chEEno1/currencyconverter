import React, { useState } from "react";
import ReactDOM from "react-dom";
import Converter from "./Converter";
import FirstVisitMessage from "./FirstVisitMessage"

import "./style.css";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shouldShow: localStorage.getItem("wasShown") ? false : true
        }
    }

    onMessageClose() {
        this.setState({shouldShow: false})
        localStorage.setItem("wasShown", true)
    }

    render(){
       return (
            <div className="App">
                <Converter />
                {this.state.shouldShow &&
                <FirstVisitMessage onClose={this.onMessageClose.bind(this)}>
                        Poruka
                </FirstVisitMessage>}
            </div>
        ); 
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
