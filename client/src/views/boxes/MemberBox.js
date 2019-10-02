import React, { Component } from 'react'
import { Input, Table, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'
import { Box, BoxBody, BoxFooter } from "../../library/kapi"

export default class MemberBox extends Component {
    state = {
        filter: "",
        members: [
            {
                username: "admin",
                name: "admin",
                role: "Admin"
            },
            {
                username: "abc123",
                name: "Information Technology",
                role: "Giáo viên"
            },
            {
                username: "bcd352",
                name: "Computer Engineering",
                role: "Sinh viên"
            },
            {
                username: "sdfe4324",
                name: "Data Analysis",
                role: "Sinh viên"
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
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { members, filter } = this.state
        return (
            <>
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
                                <tr>
                                    <th width="10%">Tài khoản</th>
                                    <th>Họ và tên</th>
                                    <th>Vai trò</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.map((member) =>
                                        <>
                                            {
                                                member.name.toLowerCase().includes(filter.toLowerCase()) &&
                                                <tr style={{ cursor: "pointer" }}>
                                                    <td>{member.username}</td>
                                                    <td>{member.name}</td>
                                                    <td>{member.role}</td>
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
            </>
        )
    }
}