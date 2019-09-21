import React from 'react'
import {
    Input,
    Label,
    Modal,
    FormGroup,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    InputGroupAddon,
    InputGroup,
    InputGroupText,
    Card,
    CardHeader,
    CardBody,
    CardTitle
} from 'reactstrap'
import axios from 'axios'
import Notification from '../../components/Notification'

export default class FacultyCard extends React.Component {
    state = {
        filter: "",
        id: "",
        name: "",
        faculties: []
    }
    getFaculties() {
        axios.get("/api/faculties").then(res =>
            this.setState({ faculties: res.data })
        )
    }
    componentWillMount() {
        this.getFaculties()
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleModal = faculty => {
        if (faculty) this.setState({ id: faculty.id, name: faculty.name })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    delete = e => {
        axios.delete('/api/faculties/' + this.state.id)
        this.getFaculties()
        this.toggleModal()
    }

    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { faculties, filter, id, name } = this.state
        return (
            <>
                <Card>
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
                                                <tr onClick={() => this.toggleModal(faculty)} style={{ cursor: "pointer" }}>
                                                    <td>{faculty.id}</td>
                                                    <td>{faculty.name}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <label className="float-right"><h6>Total: {faculties.length}</h6></label>
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
                        <Button color="primary" onClick={this.toggleModal} className="float-left"><i class="nc-icon nc-check-2" /> EDIT</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> CANCEL</Button> {' '}
                        <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> DELETE</Button>
                    </ModalFooter>
                </Modal>

            </>
        )
    }
}