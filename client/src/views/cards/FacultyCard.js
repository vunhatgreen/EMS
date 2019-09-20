import React from 'react'
import {
    Input,
    Modal,
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

export default class FacultyCard extends React.Component {
    state = {
        filter: "",
        id: "",
        name: "",
        faculties: [
            {
                id: 1,
                name: "Computer Science and Engineering"
            },
            {
                id: 2,
                name: "Logistic"
            },
            {
                id: 3,
                name: "Business Analysis"
            },
            {
                id: 4,
                name: "Electrical Engineering"
            }
        ]
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleModal = e => {
        this.setState({id: e.target.id})
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { faculties, filter, id, name } = this.state
        return (
            <>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h5">Faculty ({faculties.length})</CardTitle>
                    </CardHeader>
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
                                                <tr onClick={this.toggleModal} style={{cursor: "pointer"}} id={faculty.id}>
                                                    <td>{faculty.id}</td>
                                                    <td>{faculty.name}</td>
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
                    {/* <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader> */}
                    <ModalBody>
                        <label>ID</label>
                        <Input value={id} onChange={this.change} name="id"/>
                        <label>Name</label>
                        <Input value={name} onChange={this.change} name="name"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>Change</Button>{' '}
                        <Button color="danger" onClick={this.toggleModal}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}