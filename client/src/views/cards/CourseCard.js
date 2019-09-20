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

export default class CourseCard extends React.Component {
    state = {
        filter: "",
        courses: [
            {
                id: 1,
                name: "Course 1"
            },
            {
                id: 2,
                name: "Course 2"
            },
            {
                id: 3,
                name: "Course 3"
            },
            {
                id: 4,
                name: "Course 4"
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
        const { courses, filter } = this.state
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h5">Course ({courses.length})</CardTitle>
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
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map((course) =>
                                        <>
                                            {
                                                course.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr style={{cursor: "pointer"}}>
                                                    <td>{course.id}</td>
                                                    <td>{course.name}</td>
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