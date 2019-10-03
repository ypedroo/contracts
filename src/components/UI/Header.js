import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import dev from '../../assets/ypedro.jpg';

// import { Container } from './styles';

export default class Header extends Component {
    render() {
        return <div >
            <img src={logo} alt="logo"></img>
            <h1> Contraktor </h1>
            <a href="https://ynoapedro.com">
                <img 
                src={dev} 
                alt="resposibleDev"
                style={ { maxWidth:"50px"} }></img>
            </a>
        </div>;
    }
}