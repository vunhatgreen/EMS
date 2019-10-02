import React, { Component } from 'react'
import GeneralConfigBox from './boxes/GeneralConfigBox'
import { Col, Row } from 'reactstrap'
import CurrencyBox from './boxes/CurrencyBox'

export default class Configuration extends Component {
    render() {
        return (
            <div>
                <GeneralConfigBox />
                <Row>
                    <Col md="5">
                        <CurrencyBox />
                    </Col>
                </Row>
            </div>
        )
    }
}