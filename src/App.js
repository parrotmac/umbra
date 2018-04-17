import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdjustmentSlider from "./components/AdjustmentSlider";

class App extends Component {

    state = {
        gradient: new Gradient(),
    };

    sliderChanged()

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">UMBRA</h1>
                    <h3>a box shadow generator</h3>
                </header>
                <p className="App-intro">
                    <label>
                        <AdjustmentSlider />
                    </label>
                    <label>
                        <AdjustmentSlider />
                    </label>
                    <label>
                        <AdjustmentSlider />
                    </label>
                    <label>
                        <AdjustmentSlider />
                    </label>
                </p>
            </div>
        );
    }
}

export default App;
