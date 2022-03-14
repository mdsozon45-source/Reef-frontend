import React, {Component} from 'react';
import Page from '../components/Page';
import {
    Card,
    CardBody,
    Col,
    Form,
    Row
} from "reactstrap";

class CardPage extends Component {
    render() {
        return (
            <Page title="Substrate" breadcrumbs={[{name: 'Substrate data entry', active: true}]}>
                <div>
                    <Form>
                        <Row>
                            <Col xl={12} lg={12} md={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1">
                                        <h6 className="mt-2">Substrate</h6>
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
                                                           className="col-sm-4 col-form-label levelText">Team
                                                        Leader:</label>
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
                            <Col xl={12} lg={12} md={12} className="p-1">
                                <Card className="substrateCardRadius">
                                    <CardBody className="substrateCard1">
                                        <h6 className="mt-2">Substrate Codes</h6>
                                        <div className="row mt-3">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                                <h6 className="font14Think">HC &nbsp;&nbsp; Hard coral</h6>
                                                <h6 className="font14Think">NIA &nbsp;&nbsp; Nutrient indicator
                                                    algae</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
                                                <h6 className="font14Think">RB &nbsp;&nbsp; Rubble</h6>
                                                <h6 className="font14Think">OT &nbsp;&nbsp; Other</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                                <h6 className="font14Think">SC &nbsp;&nbsp; Soft coral</h6>
                                                <h6 className="font14Think">SP &nbsp;&nbsp; Sponge</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                                <h6 className="font14Think">SD &nbsp;&nbsp; Sand</h6>
                                                <h6 className="font14Think">RKC &nbsp;&nbsp; Recently killed coral</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
                                                <h6 className="font14Think">RC &nbsp;&nbsp; Rock</h6>
                                                <h6 className="font14Think">SI &nbsp;&nbsp; Silt/Clay </h6>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3} lg={3} md={6} sm={12} className="p-1">
                                <Card className="substrateCardRadius pr-2">
                                    <CardBody className="substrateCard1 text-center">
                                        <h6 className="mt-2">Segment 1</h6>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">0</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">HC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">10</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">0,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">10,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">1</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">RB</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">11</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">1,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">HC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">11,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">2</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">12</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">2,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">12,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">3</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SP</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">13</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">3,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">RC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">13,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">4</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">RD</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">14</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">4,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SI</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">14,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">NIA</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">15</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">5,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">15,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">6</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">HC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">16</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">6,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">16,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">7</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">HC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">17,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">7,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SP</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">17,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SD</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">18</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">8,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">RD</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">18,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">SI</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">RKC</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl={3} lg={3} md={6} sm={12} className="p-1">
                                <Card className="substrateCardRadius pr-2">
                                    <CardBody className="substrateCard1 text-center">
                                        <h6 className="mt-2">Segment 2</h6>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">27</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">37</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl={3} lg={3} md={6} sm={12} className="p-1">
                                <Card className="substrateCardRadius pr-2">
                                    <CardBody className="substrateCard1 text-center">
                                        <h6 className="mt-2">Segment 3</h6>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">27</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">37</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl={3} lg={3} md={6} sm={12} className="p-1">
                                <Card className="substrateCardRadius pr-2">
                                    <CardBody className="substrateCard1 text-center">
                                        <h6 className="mt-2">Segment 4</h6>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">25,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">35,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">26,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">36,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">27</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">37</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row rowHeight">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">9,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <h6 className="font14Think mTop">19,5</h6>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                                <select className="form-control formSelectFill form-controlHeight"
                                                        id="exampleFormControlSelect1">
                                                    <option className="levelText">Fill
                                                    </option>
                                                    <option className="levelText">Fill1
                                                    </option>
                                                    <option className="levelText">Fill2
                                                    </option>
                                                </select>
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
                                        <h6 className="mt-2">Disease & Bleaching</h6>
                                        <div className="row rowHeightDisease borderDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">HC with</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">S1</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">S2</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">S3</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">S4</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Segment Mean</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Percentage</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Percentage RKC</h6>
                                            </div>
                                        </div>


                                        <div className="row rowHeightDisease borderDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Disease</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">3</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">2</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">5</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">4</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">4</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">26%</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">9%</h6>
                                            </div>
                                        </div>


                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">Bleaching</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">5</h6>
                                            </div>
                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">6</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">2</h6>
                                            </div>

                                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">8</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">18%</h6>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                                <h6 className="font14Think mTop">17%</h6>
                                            </div>
                                        </div>


                                        <div className="row mt-5 rowHeightDisease">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2">
                                                        <h6 className="font14Think mTop">Primary Cause:</h6>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
                                                        <h6 className="font14Think mTop">Bleaching</h6>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
                                                        <h6 className="font14Think mTop">COTS</h6>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
                                                        <h6 className="font14Think mTop">Storm</h6>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
                                                        <h6 className="font14Think mTop">Other</h6>
                                                    </div>
                                                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                                        <h6 className="font14Think mTop"></h6>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                                                <div className="form-group form-groupCustom row">
                                                    <div className="col-lg-2">

                                                    </div>
                                                    <label htmlFor="inputPassword"
                                                           className="col-lg-4 col-form-label levelText">Comments</label>
                                                    <div className="col-lg-6">
                                                        <input type="text"
                                                               className="formInputBorder levelText form-control"
                                                               placeholder="Fill in name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row rowHeightDisease">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2">
                                                        <h6 className="font14Think mTop">If mean RKC is>10%</h6>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 text-center">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 text-center">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 text-center">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                                                    </div>
                                                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 text-center">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 text-center">
                                                        <input type="text" className="formInputBorder form-control formSelectFill form-controlHeight levelText form-control" placeholder="Input"/>
                                                    </div>
                                                </div>
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

export default CardPage;
