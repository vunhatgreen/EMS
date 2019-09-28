import React, { Component } from 'react'
import {
    Input,
    Table,
    Label,
    Row,
    Col,
    InputGroupAddon,
    InputGroup,
    FormGroup,
    InputGroupText,
    Card,
    CardHeader,
    CardBody,
    CardTitle
} from 'reactstrap'

export default class ConfigurationCard extends Component {
    state = {

    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { } = this.state
        return (
            <>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md="3">
                                <FormGroup>
                                    <Label>Tên trường</Label>
                                    <Input></Input>
                                </FormGroup>
                            </Col>
                            <Col md="5">
                                <FormGroup>
                                    <Label>Biểu tượng</Label>
                                    <Input></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </>
        )
    }
}