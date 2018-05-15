import React, { Component } from 'react';
import logo from './logo.svg';
import Dropdown from './components/Dropdown/Dropdown.component'
import './App.css';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to PleasePay</h1>
                </header>
                <Dropdown />
            </div>
        );
    }
}


