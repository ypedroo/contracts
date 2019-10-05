import React, { Component } from 'react';
import logo from '../../assets/logo.png';

export default class Header extends Component {
    render() {
        return <div >
            <img class="headerLogo" src={logo} alt="logo"></img>
        </div>;
    }
}