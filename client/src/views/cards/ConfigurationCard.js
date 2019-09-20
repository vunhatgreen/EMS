import React from 'react'
import {
    Input,
    Table,
    InputGroupAddon,
    InputGroup,
    InputGroupText,
    Card,
    CardHeader,
    CardBody,
    CardTitle
} from 'reactstrap'

export default class ConfigurationCard extends React.Component {
    state = {
        
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { } = this.state
        return (
            <>
                
            </>
        )
    }
}