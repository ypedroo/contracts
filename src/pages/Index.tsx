import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '../styles/styles';

export default class components extends Component {
    render() {
        return <Container>
            <div>''
                <Header />
                <Link to="/parts" >
                    <button>
                        Register part
                    </button>
                </Link>
                <Link to="/contracts" >
                    <button>
                        Register contracts
                    </button>
                </Link>
            </div>
        </Container>
    }
}