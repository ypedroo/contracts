import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/UI/Header'

export default class components extends Component {
    render() {
        return <div>
            <Header />
            <Link to="/parts" >
                <Button variant="outline-primary">
                    Register part
                </Button>
            </Link>
            <Link to="/contracts" >
                <Button
                    node="a"
                    waves="light"
                    large
                    style={{ marginRight: '5px' }}
                >
                    Register contracts
            </Button>
            </Link>
        </div>;
    }
}