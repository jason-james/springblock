import React, { Component } from 'react';
import { Page, Panel } from 'react-blur-admin';
import { Row, Col } from 'react-flex-proto';

export class Home extends Component {
    render() {
        return (
            <Page title={process.env.APP_NAME} >
                <Row>


                    <Col align="center" padding={5}>
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

                    </Col>
                </Row>
            </Page>
        );
    }
}