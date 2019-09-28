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

export default class SubjectCard extends React.Component {
    state = {
        filter: "",
        target_id: "",
        id: "",
        name: "",
        credit: 0,
        prerequisite: "",
        parallel: "",
        subjects: []
    }
    getSubjects() {
        axios.get("/api/subjects").then(res =>
            this.setState({ subjects: res.data })
        )
    }
    componentWillMount() {
        this.getSubjects()
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleModal = subject => {
        if (subject) this.setState({ id: subject.id, name: subject.name, credit: subject.credit, prerequisite: subject.prerequisite, parallel: subject.parallel, target_id: subject.id })
        else this.setState({ target_id: "" })
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    add = e => {
        axios.post('/api/subjects', {
            id: this.state.id,
            name: this.state.name,
            credit: this.state.credit,
            prerequisite: this.state.prerequisite,
            parallel: this.state.parallel
        })
        this.getSubjects()
        this.toggleModal()
    }
    delete = e => {
        axios.delete('/api/subjects/' + this.state.id)
        this.getSubjects()
        this.toggleModal()
    }
    edit = e => {
        axios.put('/api/subjects/' + this.state.target_id, { id: this.state.id, name: this.state.name, credit: this.state.credit, prerequisite: this.state.prerequisite, parallel: this.state.parallel })
        this.getSubjects()
        this.toggleModal()
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { subjects, filter, id, name, credit, prerequisite, parallel, target_id } = this.state
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
                                <tr onClick={() => this.toggleModal()} style={{ cursor: "pointer" }}>
                                    <th width="20%">ID</th>
                                    <th>Môn học</th>
                                    <th>Số tín chỉ</th>
                                    <th>Môn tiên quyết</th>
                                    <th>Môn song hành</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subjects.map((subject) =>
                                        <>
                                            {
                                                subject.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr onClick={() => this.toggleModal(subject)} style={{ cursor: "pointer" }}>
                                                    <td>{subject.id}</td>
                                                    <td>{subject.name}</td>
                                                    <td>{subject.credit}</td>
                                                    <td>{subject.prerequisite}</td>
                                                    <td>{subject.parallel}</td>
                                                </tr>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                        <label className="float-right"><h6>Tổng cộng: {subjects.length}</h6></label>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalBody>
                        <FormGroup>
                            <Label>ID</Label>
                            <Input value={id} onChange={this.change} name="id" />
                            <Label>Tên</Label>
                            <Input value={name} onChange={this.change} name="name" />
                            <Label>Số tín chỉ</Label>
                            <Input value={credit} onChange={this.change} name="credit" />
                            <Label>Môn tiên quyết</Label>
                            <Input type="select" value={prerequisite} onChange={this.change} name="prerequisite">
                                <option value=''>Không có</option>
                                {
                                    subjects.map((subject) =>
                                        <option value={subject.id}>{subject.name}</option>
                                    )
                                }
                            </Input>
                            <Label>Môn song hành</Label>
                            <Input type="select" value={parallel} onChange={this.change} name="parallel">
                                <option value=''>Không có</option>
                                {
                                    subjects.map((subject) =>
                                        <option value={subject.id}>{subject.name}</option>
                                    )
                                }
                            </Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        {target_id == "" && <Button color="primary" onClick={this.add}><i className="nc-icon nc-check-2" /> THÊM</Button>} {' '}
                        {target_id != "" && <Button color="primary" onClick={this.edit}><i class="nc-icon nc-check-2" /> SỬA</Button>} {' '}
                        <Button color="secondary" onClick={this.toggleModal}><i class="nc-icon nc-simple-remove" /> HỦY</Button> {' '}
                        {target_id != "" && <Button color="danger" onClick={this.delete}><i class="nc-icon nc-simple-delete" /> XÓA</Button>}
                    </ModalFooter>
                </Modal>

            </>
        )
    }
}