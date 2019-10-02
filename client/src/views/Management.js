import React, { Component } from 'react'
import classnames from 'classnames'
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col
} from 'reactstrap'
import FacultyBox from './boxes/FacultyBox'
import MajorBox from './boxes/MajorBox'
import CourseBox from './boxes/CourseBox'
import MemberBox from './boxes/MemberBox'
import SubjectBox from './boxes/SubjectBox'

export default class Tables extends Component {
    state = {
        activeTab: '1',
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
        const { faculties, filter } = this.state
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        > Khoa
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        > Ngành
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        > Môn học
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        > Chương trình
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        > Khóa học
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.toggle('6'); }}
                        > Thành viên
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                <FacultyBox />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <MajorBox />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col>
                                <SubjectBox />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col>
                                <CourseBox />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col>
                                <MemberBox />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </>
        )
    }
}