import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/styles';
import logo from '../assets/logo.png';
export default class Header extends Component {
    render() {
        return (
            <Container>
                <div >
                    <Link to="/" >
                        <img className="headerLogo" src={logo} alt="logo"></img>
                    </Link>
                </div>
            </Container>
        );
    }
}