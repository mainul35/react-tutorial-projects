import React, {Component} from 'react';
import {Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Col} from 'reactstrap';

export default class PostComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText></CardText>
                        <Button></Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}