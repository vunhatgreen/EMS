import React, { Component } from 'react'
import {
    Card,
    CardBody
} from 'reactstrap'

export default class ConfigurationBox extends Component {
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
                        fdsfsdf
                    </CardBody>
                </Card>
            </>
        )
    }
}