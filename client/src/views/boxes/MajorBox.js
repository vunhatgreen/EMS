import React, { Component } from 'react'
import { Input, Label, Modal, FormGroup, ModalBody, ModalFooter, Button, Table, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"
import axios from 'axios'
import NotificationAlert from 'react-notification-alert'

export default class MajorBox extends Component {
    state = {
        filter: "",
        target_id: "",
        id: "",
        name: "",
        faculty: "",
        majors: [],
        faculties: [],
    }
    componentWillMount() {
        this.getMajors()
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
    getMajors() {
        axios.get("/api/majors").then(res =>
            this.setState({ majors: res.data })
        )
    }
    getFaculties() {
        axios.get("/api/faculties").then(res =>
            this.setState({ faculties: res.data })
        )
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

    toggleModal = major => {
        this.getFaculties()
        if (major) this.setState({ id: major.id, name: major.name, faculty: major.faculty, target_id: major.id })
        else this.setState({ target_id: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    add = e => {

        axios.post('/api/majors', {
            id: this.state.id,
            name: this.state.name,
            faculty: this.state.faculty
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMajors()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/majors/' + this.state.id).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMajors()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/majors/' + this.state.target_id, { id: this.state.id, name: this.state.name, faculty: this.state.faculty }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMajors()
        this.toggleModal()
    }
    render() {
        const { majors, faculties, filter, id, name, faculty, target_id } = this.state
        return (
            <>
                <NotificationAlert ref="notify" />
                <Box>
                    <BoxBody>
                        <InputGroup className="no-border">
                            <Input onChange={this.change} name="filter" value={filter} placeholder="Tìm kiếm theo mã hoặc tên..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i className="nc-icon nc-zoom-split" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <Table responsive hover>
                            <thead className="text-primary">
                                <tr onClick={() => this.toggleModal()} style={{ cursor: "pointer" }}>
                                    <th width="20%">Mã</th>
                                    <th>Ngành</th>
                                    <th>Khoa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    majors.map((major) =>
                                        <>
                                            {
                                                (major.id.includes(filter) || major.name.toLowerCase().includes(filter.toLowerCase()))
                                                &&
                                                <tr onClick={() => this.toggleModal(major)} style={{ cursor: "pointer" }}>
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
                        <BoxFooter>
                            <label className="float-right"><h6>Tổng cộng: {majors.length}</h6></label>
                        </BoxFooter>
                    </BoxBody>
                </Box>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>Mã</Label>
                            <Input value={id} onChange={this.change} name="id" />
                            <Label>Tên</Label>
                            <Input value={name} onChange={this.change} name="name" />
                            <Label>Khoa</Label>
                            <Input type="select" name="faculty" value={faculty} onChange={this.change}>
                                {
                                    faculties.map((faculty) =>
                                        <option value={faculty.id}>{faculty.name} ({faculty.id})</option>
                                    )
                                }
                            </Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {target_id === "" && <Button color="primary" onClick={this.add}><i className="nc-icon nc-check-2" /> Thêm</Button>} {' '}
                        {target_id !== "" && <Button color="primary" onClick={this.edit}><i class="nc-icon nc-check-2" /> Sửa</Button>} {' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> Hủy</Button> {' '}
                        {target_id !== "" && <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> Xóa</Button>}
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}