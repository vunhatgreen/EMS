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
                                <CardTitle tag="h6">THÔNG TIN CHUNG</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li><p className="text-primary" style={{cursor: 'pointer'}}>THÔNG BÁO THAY ĐỔI PHÒNG HỌC TRONG HỌC KỲ 1 - NĂM HỌC 2019-2020 (Áp dụng từ ngày 23/09/2019){"  "}<Badge color="danger" pill>New</Badge></p></li>
                                    <li><p className="text-waring">THÔNG BÁO NGHỈ LỚP CRITICAL THINKING - GROUP 01</p></li>
                                    <li><p className="text-danger">THÔNG BÁO: Về việc sinh viên khóa 2019 tham dự lễ khai giảng năm học 2019-2020 (cập nhật sơ đồ chỗ ngồi)</p></li>
                                    <li><p className="text-info">DANH SÁCH SV CHUYỂN NGÀNH/CHUYỂN CHƯƠNG TRÌNH HK 1 NĂM HỌC 2019-2020 (cập nhật đến ngày 05/9/2019)</p></li>
                                </ul>         
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h6">ĐĂNG KÝ MÔN HỌC & THỜI KHÓA BIỂU</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h6">CHƯƠNG TRÌNH LIÊN KẾT</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h6">TỔ CHỨC THI & TỐT NGHIỆP</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <a>Link của bài 1</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h6">HỌC BỔNG & HỌC VỤ</CardTitle>
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