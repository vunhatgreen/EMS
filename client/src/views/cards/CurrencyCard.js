import React, { Component } from 'react'
import {
    Input,
    Button,
    Label,
    Row,
    Col,
    FormGroup,
    Card,
    CardBody,
} from 'reactstrap'

export default class CurrencyCard extends Component {
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
                <Card>
                    <CardBody>
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
                                    <Input disabled={lock} value={rate} name="rate" onChange={this.change}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Tương ứng</Label>
                                    <Input readOnly value={1+" "+use+" = "+rate+ " "+exchange}>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Giá trị tín chỉ</Label>
                                    <Input disabled={lock} value={cost} name="cost" onChange={this.change}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Tương ứng</Label>
                                    <Input readOnly value={cost+" "+use+" / 1 tín chỉ"}>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="float-right" onClick={()=>this.setState({lock : !this.state.lock})} color="primary">{lock ? 'Thay đổi' : 'Lưu thiết lập'}</Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}