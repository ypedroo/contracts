import React, { Component } from 'react';
import PartForm from '../components/Part/PartForm'
import Header from '../components/UI/Header'

// import { Container } from './styles';

export default class components extends Component {
    render() {
        return <div>
            <Header />
            <PartForm />
        </div> ;
    }
}