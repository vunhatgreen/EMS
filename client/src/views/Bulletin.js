import React from 'react'
import {
    Alert,
    Row,
    Col,
    Badge,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from 'reactstrap'

export default class Bulletin extends React.Component {
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
                                <h6 className="text-primary">THÔNG BÁO THAY ĐỔI PHÒNG HỌC TRONG HỌC KỲ 1 - NĂM HỌC 2019-2020 (Áp dụng từ ngày 23/09/2019){"  "}<Badge color="danger" pill>New</Badge></h6>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Course Registration & Timetable</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
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