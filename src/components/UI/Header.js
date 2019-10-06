import React, { Component } from 'react';
import logo from '../../assets/logo.png';

export default class Header extends Component {
    render() {
        return <div >
            <img className="headerLogo" src={logo} alt="logo"></img>
        </div>;
    }
}