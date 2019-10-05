import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../UI/Header';

export default class Part extends Component {
    render() {
        return <div>
            <Header />
            <h1 Class="HeaderParts"> parts </h1>
            <Form>
                <Form.Group controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Cpf</Form.Label>
                    <Form.Control type="text" placeholder="CPF" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Button variant="primary" type="submit">

                    Submit
                </Button>
            </Form>
        </div>;
    }
}
