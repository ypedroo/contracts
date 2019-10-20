import React, { Component } from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Container = styled.div`
postion: absolute;
width:100%;
height: 100%;
display: inline-block;
margin-botton: 70px;
`

const Img = styled.img`
margin-botton: 70px;
width: 70px;
`


export default class Header extends Component {
    render() {
        return (
            <Container>
                <div >
                    <Img className="headerLogo" src={logo} alt="logo"></Img>
                </div>
            </Container>
        );
    }
}