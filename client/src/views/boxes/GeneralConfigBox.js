import React, { Component } from 'react'
import { Input, Label, Row, Col, FormGroup } from 'reactstrap'
import { Box, BoxBody, BoxHeader, BoxTitle } from '../../library/kapi'

export default class GeneralConfigBox extends Component {
    state = {

    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <>
                <Box>
                    <BoxHeader>
                        <BoxTitle>
                            THIẾT LẬP CHUNG
                        </BoxTitle>
                    </BoxHeader>
                    <BoxBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Tên trường</Label>
                                    <Input></Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Biểu tượng</Label>
                                    <Input></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </BoxBody>
                </Box>
            </>
        )
    }
}