import React, { Component } from 'react'
import { Input, Button, Label, Row, Col, FormGroup } from 'reactstrap'
import { Box, BoxHeader, BoxBody, BoxTitle } from '../../LibComponent/kapi'

export default class CurrencyBox extends Component {
    state = {
        use: "",
        exchange: "",
        cost: 0,
        rate: 0,
        lock: true
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { use, exchange, rate, cost, lock } = this.state
        return (
            <>
                <Box>
                    <BoxHeader>
                        <BoxTitle>ĐƠN VỊ TÀI CHÍNH</BoxTitle>
                    </BoxHeader>
                    <BoxBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Đơn vị sử dụng</Label>
                                    <Input disabled={lock} type="select" value={use} name="use" onChange={this.change}>
                                        <option value="VND">Việt Nam Đồng (VND)</option>
                                        <option value="USD">Dollar (USD)</option>
                                        <option value="EUR">Euro (EUR)</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Đơn vị quy đổi</Label>
                                    <Input disabled={lock} type="select" value={exchange} name="exchange" onChange={this.change}>
                                        <option value="VND">Việt Nam Đồng (VND)</option>
                                        <option value="USD">Dollar (USD)</option>
                                        <option value="EUR">Euro (EUR)</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Tỉ giá</Label>
                                    <Input disabled={lock} value={rate} name="rate" onChange={this.change} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Tương ứng</Label>
                                    <Input readOnly value={1 + " " + use + " = " + rate + " " + exchange}>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Giá trị tín chỉ</Label>
                                    <Input disabled={lock} value={cost} name="cost" onChange={this.change} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Tương ứng</Label>
                                    <Input readOnly value={cost + " " + use + " / 1 tín chỉ"}>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button onClick={() => this.setState({ lock: !this.state.lock })} color="primary"><i className={lock ? 'nc-icon nc-refresh-69' : 'nc-icon nc-check-2'} />{lock ? ' Thay đổi' : ' Lưu'}</Button>
                    </BoxBody>
                </Box>
            </>
        )
    }
}