import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col} from 'reactstrap';
import './FormComponent.css'
import axios from 'axios'

class FormComponent extends Component {

    submitPost = () => {

    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            title: '',
            body: ''
        };

        this.submitPost = this.submitPost.bind(this);
    }

    submitPost = ()=>{

        let api = axios.create({baseURL: ''});
        let encodedData = btoa(JSON.stringify(this.state));

    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <Container className={'container'}>
                <Form onSubmit={this.submitPost.bind(this)}>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={e => this.change(e)} name="name" id="name" placeholder="Enter your name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" onChange={e => this.change(e)} name="email" id="email" placeholder="Enter your email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="postTitle" sm={2}>Post Title</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={e => this.change(e)} name="postTitle" id="postTitle" placeholder="Enter post title"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="postBody" sm={2}>Post body</Label>
                        <Col sm={10}>
                            <Input type="textarea" onChange={e => this.change(e)} name="postBody" id="postBody"/>
                        </Col>
                    </FormGroup>
                    <Button>Post</Button>
                </Form>
            </Container>
        );
    }
}

export default FormComponent;