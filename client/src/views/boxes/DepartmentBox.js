import React, { Component } from 'react'
import { Input, Label, Modal, FormGroup, ModalBody, ModalFooter, Button, Table, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'
import NotificationAlert from 'react-notification-alert'
import axios from 'axios'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"

export default class DepartmentBox extends Component {
    state = {
        filter: "",
        target_id: "",
        id: "",
        name: "",
        departments: []
    }
    componentWillMount() {
        this.getDepartments()
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
    toggleModal = department => {
        if (department) this.setState({ id: department.id, name: department.name, target_id: department.id })
        else this.setState({ target_id: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    getDepartments() {
        axios.get("/api/departments").then(res =>
            this.setState({ departments: res.data })
        )
    }
    add = e => {
        axios.post('/api/departments', {
            id: this.state.id,
            name: this.state.name
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getDepartments()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/departments/' + this.state.id).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getDepartments()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/departments/' + this.state.target_id, { id: this.state.id, name: this.state.name }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getDepartments()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { departments, filter, id, name, target_id } = this.state
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
                                    <th>Khoa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    departments.map((department) =>
                                        <>
                                            {
                                                (department.id.includes(filter) || department.name.toLowerCase().includes(filter.toLowerCase()))
                                                &&
                                                <tr onClick={() => this.toggleModal(department)} style={{ cursor: "pointer" }}>
                                                    <td>{department.id}</td>
                                                    <td>{department.name}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <BoxFooter>
                            <label className="float-right"><h6>Tổng cộng: {departments.length}</h6></label>
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