import React from 'react'
import {
    Input,
    Label,
    Modal,
    FormGroup,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    InputGroupAddon,
    InputGroup,
    InputGroupText,
    Card,
    CardBody
} from 'reactstrap'
import axios from 'axios'

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
    getCourses() {
        axios.get("/api/courses").then(res =>
            this.setState({ course: res.data })
        )
    }
    componentWillMount() {
        this.getCourses()
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleModal = course => {
        if (course) this.setState({ id: course.id, name: course.name, target_id: course.id })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    delete = e => {
        axios.delete('/api/courses/' + this.state.id)
        this.getCourses()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/courses/' + this.state.target_id, {id: this.state.id, name:  this.state.name})
        this.getcourse()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { id, name, courses, filter } = this.state
        return (
            <>
                <Card>
                    <CardBody>
                        <InputGroup className="no-border">
                            <Input onChange={this.change} name="filter" value={filter} placeholder="Tìm kiếm theo tên..." />
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

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>ID</Label>
                            <Input value={id} onChange={this.change} name="id" />
                            <Label>Name</Label>
                            <Input value={name} onChange={this.change} name="name" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.edit} className="float-left"><i class="nc-icon nc-check-2" /> EDIT</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> CANCEL</Button> {' '}
                        <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> DELETE</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}