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

export default class UserCard extends React.Component {
    state = {
        filter: "",
        users: [
            {
                id: 1,
                name: "Computer Science"
            },
            {
                id: 2,
                name: "Information Technology"
            },
            {
                id: 3,
                name: "Computer Engineering"
            },
            {
                id: 4,
                name: "Data Analysis"
            }
        ]
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { users, filter } = this.state
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">User ({users.length})</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <InputGroup className="no-border">
                            <Input onChange={this.change} name="filter" value={filter} placeholder="Search name..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i className="nc-icon nc-zoom-split" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <Table hover>
                            <thead className="text-primary">
                                <tr>
                                    <th width="20%">ID</th>
                                    <th>User</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) =>
                                        <>
                                            {
                                                user.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </>
        )
    }
}