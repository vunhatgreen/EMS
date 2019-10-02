import React, { Component } from 'react'
import { Row, Col, Badge } from 'reactstrap'
import { Box, BoxBody, BoxHeader, BoxTitle } from "../library/kapi"

export default class Bulletin extends Component {
    render() {
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
                                    <li><p className="text-primary" style={{ cursor: 'pointer' }}>THÔNG BÁO THAY ĐỔI PHÒNG HỌC TRONG HỌC KỲ 1 - NĂM HỌC 2019-2020 (Áp dụng từ ngày 23/09/2019){"  "}<Badge color="danger" pill>New</Badge></p></li>
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
            </>
        )
    }
}