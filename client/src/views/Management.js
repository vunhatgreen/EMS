import React from 'react'
import classnames from 'classnames';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col
} from 'reactstrap'
import FacultyCard from './cards/FacultyCard';
import MajorCard from './cards/MajorCard';
import CourseCard from './cards/CourseCard'
import UserCard from './cards/UserCard'

export default class Tables extends React.Component {
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
                        > Faculty
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        > Major
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        > Subject
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        > Program
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        > Course
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }}
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.toggle('6'); }}
                        > User
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                                <FacultyCard />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <MajorCard />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col>

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
                                <CourseCard />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col>
                                <UserCard />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </>
        )
    }
}