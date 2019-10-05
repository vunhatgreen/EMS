import React, { Component } from 'react'
import { Input, Label, Modal, FormGroup, ModalBody, ModalFooter, Button, Table, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"
import axios from 'axios'
import NotificationAlert from 'react-notification-alert'

export default class SubjectBox extends Component {
    state = {
        filter: "",
        target_id: "",
        id: "",
        name: "",
        credit: 0,
        subjects: []
    }
    componentWillMount() {
        this.getSubjects()
    }
    getSubjects() {
        axios.get("/api/subjects").then(res =>
            this.setState({ subjects: res.data })
        )
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
    toggleModal = subject => {
        if (subject) this.setState({ id: subject.id, name: subject.name, credit: subject.credit, target_id: subject.id })
        else this.setState({ target_id: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    add = e => {
        axios.post('/api/subjects', {
            id: this.state.id,
            name: this.state.name,
            credit: this.state.credit
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getSubjects()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/subjects/' + this.state.id).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getSubjects()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/subjects/' + this.state.target_id, { id: this.state.id, name: this.state.name, credit: this.state.credit}).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getSubjects()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { subjects, filter, id, name, credit, target_id } = this.state
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
                                    <th>Mã</th>
                                    <th>Môn học</th>
                                    <th>Số tín chỉ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subjects.map((subject) =>
                                        <>
                                            {
                                                (subject.id.includes(filter) || subject.name.toLowerCase().includes(filter.toLowerCase()))
                                                &&
                                                <tr onClick={() => this.toggleModal(subject)} style={{ cursor: "pointer" }}>
                                                    <td>{subject.id}</td>
                                                    <td>{subject.name}</td>
                                                    <td>{subject.credit}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <BoxFooter>
                            <label className="float-right"><h6>Tổng cộng: {subjects.length}</h6></label>
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
                            <Label>Số tín chỉ</Label>
                            <Input type="number" value={credit} onChange={this.change} name="credit" />
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