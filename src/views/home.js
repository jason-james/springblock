import React, { Component } from 'react';
import { Page, Panel } from 'react-blur-admin';
import { Row, Col } from 'react-flex-proto';
import { Flowpoint, Flowspace } from 'flowpoints';

export class Home extends Component {
    render() {
        return (
            <Page title={process.env.APP_NAME} style={{top:"65px"}} >
                <Row>
                    <Col align="center" padding={5} >
                        <Panel title='Tx Completed'>
                            <div style={{margin:"2rem"}}>
                                    <p style={{fontSize:"18px"}}>24h: 18</p>
                                <p style={{fontSize:"18px"}}>All-time: 186</p>

                            </div>

                        </Panel>
                    </Col>
                    <Col align="center" padding={5}>
                        <Panel title='Latest Tx' >
                            <div style={{margin:"2rem"}}>
                                <p style={{fontSize:"18px"}}>17/11/2019</p>
                                <p style={{fontSize:"18px"}}>22:48</p>
                            </div>
                        </Panel>
                    </Col>
                    <Col align="center" padding={5}>
                        <Panel title='XRP Balance'>
                            <div style={{margin:"2rem"}}>
                                <p style={{fontSize:"18px"}}>1138 XRP</p>
                                <p style={{fontSize:"14px"}}>($13190 USD)</p>
                            </div>
                        </Panel>
                    </Col>
                    <Col align="center" padding={5}>
                        <Panel title='XRP Accumulated'>
                            <div style={{margin:"2rem"}}>
                                <p style={{fontSize:"18px"}}>113 XRP</p>
                                <p style={{fontSize:"14px"}}>($1319 USD)</p>
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <h2>Latest Transaction</h2>
                    </Col>
                </Row>
                <Row>
                    <Col padding={5}>
                            <Flowspace background="transparent">
                                <Flowpoint style={{borderColor: "white", width: "350px", height:"75px"}} key="a" outputs={["b"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"1em"}}>
                                            <p >r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV</p>
                                            <p >Transfer 139.0049030 XRP</p>

                                        </div>
                                    </Col>
                                </Flowpoint>
                                <Flowpoint style={{borderColor: "white", width: "200px", height:"100px"}} key="b" outputs={["c"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"1rem"}}>
                                            <p style={{fontSize:"18px"}}>XRP/ULT</p>
                                            <p style={{fontSize:"14px"}}>139.32443/1501.73267</p>
                                        </div>
                                    </Col>
                                </Flowpoint>
                                <Flowpoint style={{borderColor: "white", width: "200px", height:"100px"}} key="c" outputs={["d"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"2rem"}}>
                                            <p style={{fontSize:"18px"}}>ULT/CNY</p>
                                            <p style={{fontSize:"14px"}}>1501.73267/310.73267</p>
                                        </div>
                                    </Col>
                                </Flowpoint>
                                <Flowpoint style={{borderColor: "white", width: "200px", height:"100px"}} key="d" outputs={["e"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"2rem"}}>
                                            <p style={{fontSize:"18px"}}>CNY/XRP</p>
                                            <p style={{fontSize:"14px"}}>310.73267/139.73267</p>
                                        </div>
                                    </Col>
                                </Flowpoint>
                                <Flowpoint style={{borderColor: "white", width: "200px", height:"100px"}} key="e" outputs={["f"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"2rem"}}>
                                            <p style={{fontSize:"18px"}}>XRP/ETH</p>
                                            <p style={{fontSize:"14px"}}>139.73267/0.13938</p>
                                        </div>
                                    </Col>
                                </Flowpoint>
                                <Flowpoint style={{borderColor: "white", width: "350px", height:"75px"}} key="f" outputs={["a"]} variant="outlined">
                                    <Col align="center">
                                        <div style={{margin:"1em"}}>
                                            <p >r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV</p>
                                            <p >Receive 0.13938 ETH</p>
                                        </div>
                                    </Col>
                                </Flowpoint>
                            </Flowspace>
                    </Col>
                </Row>
            </Page>
        );
    }
}