import React, { Component } from 'react'
import { Input, Label, Modal, FormGroup, ModalBody, ModalFooter, Button, Table, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'
import NotificationAlert from 'react-notification-alert'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"
import axios from 'axios'

export default class MemberBox extends Component {
    state = {
        filter: "",
        target_username: "",
        username: "",
        name: "",
        type: "",
        members: []
    }
    componentWillMount() {
        this.getMembers()
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
    toggleModal = member => {
        if (member) this.setState({ username: member.username, name: member.name, target_username: member.username })
        else this.setState({ target_username: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    getMembers() {
        axios.get("/api/infos").then(res =>
            this.setState({ members: res.data })
        )
    }
    add = e => {
        axios.post('/api/infos', {
            username: this.state.username,
            name: this.state.name
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMembers()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/infos/' + this.state.username).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMembers()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/infos/' + this.state.target_username, { username: this.state.username, name: this.state.name }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getMembers()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { members, filter, username, name, target_username } = this.state
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
                                    <th width="10%">Tài khoản</th>
                                    <th>Họ và tên</th>
                                    {/* <th>Vai trò</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.map((member) =>
                                        <>
                                            {
                                                (member.username.includes(filter) || member.name.toLowerCase().includes(filter.toLowerCase()))
                                                &&
                                                <tr onClick={() => this.toggleModal(member)} style={{ cursor: "pointer" }}>
                                                    <td>{member.username}</td>
                                                    <td>{member.name}</td>
                                                    {/* <td>{member.type}</td> */}
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <BoxFooter>
                            <label className="float-right"><h6>Tổng cộng: {members.length}</h6></label>
                        </BoxFooter>
                    </BoxBody>
                </Box>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>Tài khoản</Label>
                            <Input value={username} onChange={this.change} name="username" />
                            <Label>Họ và tên</Label>
                            <Input value={name} onChange={this.change} name="name" />
                            {/* <Label>Vai trò</Label>
                            <Input value={type} onChange={this.change} name="type" /> */}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {target_username === "" && <Button color="primary" onClick={this.add}><i className="nc-icon nc-check-2" /> Thêm</Button>} {' '}
                        {target_username !== "" && <Button color="primary" onClick={this.edit}><i class="nc-icon nc-check-2" /> Sửa</Button>} {' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> Hủy</Button> {' '}
                        {target_username !== "" && <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> Xóa</Button>}
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}