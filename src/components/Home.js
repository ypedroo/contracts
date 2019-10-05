import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PartForm from '../components/Part/PartForm'
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
        </div>;
    }
}