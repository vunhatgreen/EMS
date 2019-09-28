import React, { Component } from 'react'
import {
    Row,
    Col,
    Badge,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from 'reactstrap'

export default class Bulletin extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Thông tin chung</CardTitle>
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
                                <CardTitle tag="h5">Đăng ký môn học và thời khóa biểu</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Chương trình liên kết</CardTitle>
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