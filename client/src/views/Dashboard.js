import React from 'react'
import {
    Alert,
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from 'reactstrap'

export default class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">General Information</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Alert color="primary">
                                    This is a primary alert — check it out!
                                </Alert>
                                <Alert color="success">
                                    This is a primary alert — check it out!
                                </Alert>
                                <Alert color="warning">
                                    This is a primary alert — check it out!
                                </Alert>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Course Registration & Timetable</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Linked Program</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}