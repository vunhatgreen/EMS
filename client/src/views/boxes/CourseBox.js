import React, { Component } from 'react'
import {
    Input, Label, Modal, FormGroup, ModalBody, ModalFooter, Button, Table, InputGroupAddon, InputGroup, InputGroupText
} from 'reactstrap'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"
import NotificationAlert from 'react-notification-alert'
import axios from 'axios'

export default class CourseBox extends Component {
    state = {
        filter: "",
        id: "",
        name: "",
        room: "",
        start: "",
        end: "",
        lecturer: "",
        prerequisite: "",
        parallel: "",
        target_id: "",
        courses: [],
        subjects: [],
    }
    getCourses() {
        axios.get("/api/courses").then(res =>
            this.setState({ courses: res.data })
        )
    }
    componentWillMount() {
        this.getCourses()
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
    toggleModal = course => {
        if (course) this.setState({ id: course.id, name: course.name, room: course.room, start: course.start, end: course.end, lecturer: course.lecturer, prerequisite: course.prerequisite, parallel: course.parallel, target_id: course.id })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    add = e => {
        axios.post('/api/courses', {
            id: this.state.id, name: this.state.name, room: this.state.room, start: this.state.start, end: this.state.end,
            lecturer: this.state.lecturer, prerequisite: this.state.prerequisite, parallel: this.state.parallel
        }).then(res => {
            this.alert(res.data.type, res.data.message)
        })
        this.getCourses()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/courses/' + this.state.id)
        this.getCourses()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/courses/' + this.state.target_id, {
            id: this.state.id, name: this.state.name, room: this.state.room, start: this.state.start, end: this.state.end,
            lecturer: this.state.lecturer, prerequisite: this.state.prerequisite, parallel: this.state.parallel
        })
        this.getCourses()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { id, name, room, start, end, lecturer, prerequisite, parallel, courses, subjects, filter, target_id } = this.state
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
                                    <th width="5%">Mã</th>
                                    <th width="25%">Khóa học</th>
                                    <th width="10%">Phòng</th>
                                    <th width="10%">Bắt đầu</th>
                                    <th width="10%">Kết thúc</th>
                                    <th width="10%">Giảng viên</th>
                                    <th width="15%">Môn tiên quyết</th>
                                    <th width="15%">Môn song hành</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map((course) =>
                                        <>
                                            {
                                                (course.id.includes(filter) || course.name.toLowerCase().includes(filter.toLowerCase()))
                                                &&
                                                <tr onClick={() => this.toggleModal(course)} style={{ cursor: "pointer" }}>
                                                    <td>{course.id}</td>
                                                    <td>{course.name}</td>
                                                    <td>{course.room}</td>
                                                    <td>{course.start}</td>
                                                    <td>{course.end}</td>
                                                    <td>{course.lecturer}</td>
                                                    <td>{course.prerequisite}</td>
                                                    <td>{course.parallel}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <BoxFooter>
                            <label className="float-right"><h6>Tổng cộng: {courses.length}</h6></label>
                        </BoxFooter>
                    </BoxBody>
                </Box>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>Mã</Label>
                            <Input value={id} onChange={this.change} name="id" />
                            <Label>Môn học</Label>
                            <Input type="select" value={name} onChange={this.change} name="name">
                                {
                                    subjects.map((subject) =>
                                        <option value={subject.name}>{subject.name} ({subject.id})</option>
                                    )
                                }
                            </Input>
                            <Label>Phòng</Label>
                            <Input type="select" value={room} onChange={this.change} name="room">
                                <option value="123">A324</option>
                                <option value="123">A324</option>
                            </Input>
                            <Label>Thời gian bắt đầu</Label>
                            <Input value={start} onChange={this.change} name="start">
                            </Input>
                            <Label>Thời gian kết thúc</Label>
                            <Input value={end} onChange={this.change} name="end">
                            </Input>
                            <Label>Giảng viên</Label>
                            <Input type="select" value={lecturer} onChange={this.change} name="lecturer">
                                <option value="Nguyen Van O">Nguyễn Văn Ơ</option>
                                <option value="Nguyen Vaan O">Nguyễn Văn z</option>
                            </Input>
                            <Label>Môn tiên quyết</Label>
                            <Input type="select" value={prerequisite} onChange={this.change} name="prerequisite">
                                <option></option>
                                {
                                    courses.map((course) =>
                                        <option value={course.id}>{course.name} ({course.id})</option>
                                    )
                                }
                            </Input>
                            <Label>Môn song hành</Label>
                            <Input type="select" value={parallel} onChange={this.change} name="parallel">
                                <option></option>
                                {
                                    courses.map((course) =>
                                        <option value={course.id}>{course.name} ({course.id})</option>
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