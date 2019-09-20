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

export default class MajorCard extends React.Component {
    state = {
        filter: "",
        majors: [
            {
                id: 1,
                name: "Computer Science",
                faculty: "CSE"
            },
            {
                id: 2,
                name: "Information Technology",
                faculty: "CSE"
            },
            {
                id: 3,
                name: "Computer Engineering",
                faculty: "CSE"
            },
            {
                id: 4,
                name: "Data Analysis",
                faculty: "CSE"
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
        const { majors, filter } = this.state
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Major ({majors.length})</CardTitle>
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
                                    <th>Major</th>
                                    <th>Faculty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    majors.map((major) =>
                                        <>
                                            {
                                                major.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr>
                                                    <td>{major.id}</td>
                                                    <td>{major.name}</td>
                                                    <td>{major.faculty}</td>
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