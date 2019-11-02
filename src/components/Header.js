import React, { Component } from 'react';
import logo from '../assets/logo.png';
import {Container} from '../styles/styles';
export default class Header extends Component {
    render() {
        return (
            <Container>
                <div >
                    <img className="headerLogo" src={logo} alt="logo"></img>
                </div>
            </Container>
        );
    }
}