import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'
import CurrencyCard from './cards/CurrencyCard'

export default class Finance extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="5">
                        <CurrencyCard />
                    </Col>
                </Row>
            </div>
        )
    }
}