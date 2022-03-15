import React, {Component} from 'react';
import Page from "../components/Page";
import {Card, CardBody, Col, Form, Row} from "reactstrap";

class FishInvertebrateDataEntry extends Component {
    render() {
        return (
            <Page title="Fish & Invertebrate" breadcrumbs={[{name: 'Fish & Invertebrate Data Entry', active: true}]}>
                <div>
                    <Form>
                        <Row>
                            <Col xl={12} lg={12} md={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1">
                                        <h6 className="mt-2">Fish & Invertebrate </h6>
                                        <div className="row">
                                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="staticEmail"
                                                           className="col-sm-4 col-form-label levelText">Site
                                                        Name:</label>
                                                    <div className="col-sm-8">
                                                        <select
                                                            className="formSelect Sibu-Tinggi Marine Park form-control-sm"
                                                            id="exampleFormControlSelect1">
                                                            <option className="levelText">Sibu-Tinggi Marine Park
                                                            </option>
                                                            <option className="levelText">Sibu-Tinggi Marine Park
                                                            </option>
                                                            <option className="levelText">Sibu-Tinggi Marine Park
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-4 col-form-label levelText">Transect
                                                        Depth:</label>
                                                    <div className="col-sm-8">
                                                        <input type="text"
                                                               className="formInputBorder levelText form-control-sm"
                                                               placeholder="Transect Depth"/>
                                                    </div>
                                                </div>
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-4 col-form-label levelText">Date:</label>
                                                    <div className="col-sm-8">
                                                        <input type="date"
                                                               className="formInputBorder levelText form-control-sm"
                                                               placeholder="Transect Depth"/>
                                                    </div>
                                                </div>
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-4 col-form-label levelText">Start
                                                        Time:</label>
                                                    <div className="col-sm-8">
                                                        <input type="time"
                                                               className="formInputBorder levelText form-control-sm"
                                                               placeholder="Transect Depth"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12">

                                            </div>

                                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="staticEmail"
                                                           className="col-sm-4 col-form-label levelText">Country/Island:</label>
                                                    <div className="col-sm-8">
                                                        <select className="formSelect form-control-sm"
                                                                id="exampleFormControlSelect1">
                                                            <option className="levelText">Johor, Malaysia
                                                            </option>
                                                            <option className="levelText">Sibu-Tinggi Marine Park
                                                            </option>
                                                            <option className="levelText">Sibu-Tinggi Marine Park
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-4 col-form-label levelText">Team
                                                        Leader:</label>
                                                    <div className="col-sm-8">
                                                        <input type="text"
                                                               className="formInputBorder levelText form-control-sm"
                                                               placeholder="Fill in name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group form-groupCustom row">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-4 col-form-label levelText">Recoded By:</label>
                                                    <div className="col-sm-8">
                                                        <input type="text"
                                                               className="formInputBorder levelText form-control-sm"
                                                               placeholder="Fill in name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1 pl-4 pr-4">
                                        <h6 className="mt-2">Fish</h6>
                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Species</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                                                <h6 className="font14Think mTop">Transect width:</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">0-20m</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">25-45m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">50-70m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">75-95m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Total</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Mean</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>
                                        </div>


                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Butterflyfish</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"></h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">16</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">13</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">21</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">58</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">14</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">19</h6>
                                            </div>
                                        </div>


                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Heamulidae</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">14</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">6</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">9</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">17</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">46</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">11</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Snapper</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">7</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">3</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">11</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">5</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">26</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">6</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">11</h6>
                                            </div>
                                        </div>


                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Baramundi Cod</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">4</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">12</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">6</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">10</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">32</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">10</h6>
                                            </div>
                                        </div>



                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Choose fish
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <button className="btn AddBtn">+ Add</button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1 pl-4 pr-4">
                                        <h6 className="mt-2">Inverts</h6>
                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Species</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                                                <h6 className="font14Think mTop">Transect width:</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">0-20m</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">25-45m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">50-70m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">75-95m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Total</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Mean</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Choose Inverts
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <button className="btn AddBtn">+ Add</button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1 pl-4 pr-4">
                                        <h6 className="mt-2">Impact</h6>
                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Kind</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                                                <h6 className="font14Think mTop">Transect width:</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">0-20m</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">25-45m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">50-70m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">75-95m</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Total</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">Mean</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Choose Impact
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop"> </h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Quantity"/>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">

                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                <h6 className="font14Think mTop">-</h6>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <button className="btn AddBtn">+ Add</button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                        <div className="text-center mt-3">
                            <button className="btn btn-dark">Analyse Data <i className="fa fa-arrow-right"></i></button>
                        </div>
                    </Form>
                </div>
            </Page>
        );
    }
}

export default FishInvertebrateDataEntry;