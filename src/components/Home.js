import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/UI/Header'

// import { Container } from './styles';

export default class components extends Component {
    render() {
        return <div>
            <Header />
            <Link to="/parts" >
                <button type="button">
                    Register new part
            </button>
            </Link>
            <Link to="/contracts" >
                <button type="button">
                    Register new contracts
            </button>
            </Link>
        </div>;
    }
}