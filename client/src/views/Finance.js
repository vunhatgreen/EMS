import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'
import CurrencyBox from './boxes/CurrencyBox'

export default class Finance extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="5">
                        <CurrencyBox />
                    </Col>
                </Row>
            </div>
        )
    }
}