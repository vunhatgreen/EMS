import React, { Component } from 'react'
import { Modal, Label, ModalBody, FormGroup, Input, Button, ModalFooter, Row, Col, Badge } from 'reactstrap'
import { Box, BoxBody, BoxHeader, BoxTitle } from "../library/kapi"
import axios from 'axios'

export default class Bulletin extends Component {
    state = {
        target_id: "",
        id: "",
        name: "",
        announcements: []
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
        const { announcements, id, title, content, name, target_id } = this.state
        return (
            <>
                <Row>
                    <Col>
                        <Box>
                            <BoxHeader>
                                <BoxTitle tag="h6">THÔNG TIN CHUNG</BoxTitle>
                            </BoxHeader>
                            <BoxBody>
                                <ul>
                                    <li onClick={() => this.toggleModal()}><p className="text-primary" style={{ cursor: 'pointer' }}>THÔNG BÁO THAY ĐỔI PHÒNG HỌC TRONG HỌC KỲ 1 - NĂM HỌC 2019-2020 (Áp dụng từ ngày 23/09/2019){"  "}<Badge color="danger" pill>New</Badge></p></li>
                                    <li><p className="text-waring">THÔNG BÁO NGHỈ LỚP CRITICAL THINKING - GROUP 01</p></li>
                                    <li><p className="text-danger">THÔNG BÁO: Về việc sinh viên khóa 2019 tham dự lễ khai giảng năm học 2019-2020 (cập nhật sơ đồ chỗ ngồi)</p></li>
                                    <li><p className="text-info">DANH SÁCH SV CHUYỂN NGÀNH/CHUYỂN CHƯƠNG TRÌNH HK 1 NĂM HỌC 2019-2020 (cập nhật đến ngày 05/9/2019)</p></li>
                                </ul>
                            </BoxBody>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Box>
                            <BoxHeader>
                                <BoxTitle tag="h6">ĐĂNG KÝ MÔN HỌC & THỜI KHÓA BIỂU</BoxTitle>
                            </BoxHeader>
                            <BoxBody>
                                <a>Link của bài 1</a>
                            </BoxBody>
                        </Box>
                    </Col>
                    <Col md="6">
                        <Box>
                            <BoxHeader>
                                <BoxTitle tag="h6">CHƯƠNG TRÌNH LIÊN KẾT</BoxTitle>
                            </BoxHeader>
                            <BoxBody>
                                <a>Link của bài 1</a>
                            </BoxBody>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Box>
                            <BoxHeader>
                                <BoxTitle tag="h6">TỔ CHỨC THI & TỐT NGHIỆP</BoxTitle>
                            </BoxHeader>
                            <BoxBody>
                                <a>Link của bài 1</a>
                            </BoxBody>
                        </Box>
                    </Col>
                    <Col md="6">
                        <Box>
                            <BoxHeader>
                                <BoxTitle tag="h6">HỌC BỔNG & HỌC VỤ</BoxTitle>
                            </BoxHeader>
                            <BoxBody>
                                <a>Link của bài 1</a>
                            </BoxBody>
                        </Box>
                    </Col>
                </Row>


                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>Tiêu đề</Label>
                            <Input value={title} onChange={this.change} name="title" />
                            <Label>Nội dung</Label>
                            <Input type="textarea" value={content} onChange={this.change} name="content" />
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