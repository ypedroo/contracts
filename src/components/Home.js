import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PartForm from '../components/Part/PartForm'
import Header from '../components/UI/Header'

// import { Container } from './styles';

export default class components extends Component {
    render() {
        return <div>
            <Header />
            <button
            onClick={<Link to="/parts" />}>
                Register new part 
            </button>
            
        </div> ;
    }
}