import React, { Component } from 'react';
import logo from '../../assets/logo.png';

export default class Header extends Component {
    render() {
        return <div >
            <img src={logo} alt="logo"></img>
            <h1> Contraktor </h1>
        </div>;
    }
}