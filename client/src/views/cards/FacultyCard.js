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

export default class FacultyCard extends React.Component {
    state = {
        filter: "",
        faculties: [
            {
                id: 1,
                name: "Computer Science and Engineering"
            },
            {
                id: 2,
                name: "Logistic"
            },
            {
                id: 3,
                name: "Business Analysis"
            },
            {
                id: 4,
                name: "Electrical Engineering"
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
        const { faculties, filter } = this.state
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Faculty ({faculties.length})</CardTitle>
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
                                    <th>Faculty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    faculties.map((faculty) =>
                                        <>
                                            {
                                                faculty.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr>
                                                    <td>{faculty.id}</td>
                                                    <td>{faculty.name}</td>
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