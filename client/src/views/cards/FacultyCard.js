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
import NotificationAlert from 'react-notification-alert'
import axios from 'axios'

export default class FacultyCard extends React.Component {
    state = {
        filter: "",
        target_id: "",
        id: "",
        name: "",
        faculties: []
    }
    componentWillMount() {
        this.getFaculties()
    }
    alert(type, message) {
        this.refs.notify.notificationAlert({
            place: 'br',
            message: (<div>{message}</div>),
            type: type,
            icon: "nc-icon nc-bell-55",
            autoDismiss: 3
        })
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleModal = faculty => {
        if (faculty) this.setState({ id: faculty.id, name: faculty.name, target_id: faculty.id })
        else this.setState({ target_id: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    getFaculties() {
        axios.get("/api/faculties").then(res =>
            this.setState({ faculties: res.data })
        )
    }
    add = e => {
        axios.post('/api/faculties', {
            id: this.state.id,
            name: this.state.name
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getFaculties()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/faculties/' + this.state.id).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getFaculties()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/faculties/' + this.state.target_id, { id: this.state.id, name: this.state.name }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getFaculties()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { faculties, filter, id, name, target_id } = this.state
        return (
            <>
                <Card>
                    <NotificationAlert ref="notify" />
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
                                <tr onClick={() => this.toggleModal()} style={{ cursor: "pointer" }}>
                                    <th width="20%">ID</th>
                                    <th>Khoa</th>
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
                        <label className="float-right"><h6>Tổng cộng: {faculties.length}</h6></label>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>ID</Label>
                            <Input value={id} onChange={this.change} name="id" />
                            <Label>Tên</Label>
                            <Input value={name} onChange={this.change} name="name" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {target_id === "" && <Button color="primary" onClick={this.add}><i className="nc-icon nc-check-2" /> THÊM</Button>} {' '}
                        {target_id !== "" && <Button color="primary" onClick={this.edit}><i class="nc-icon nc-check-2" /> SỬA</Button>} {' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> HỦY</Button> {' '}
                        {target_id !== "" && <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> XÓA</Button>}
                    </ModalFooter>
                </Modal>

            </>
        )
    }
}