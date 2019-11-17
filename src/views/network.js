import React, { Component } from "react"
import { Page, Panel, Table, TableHead, TableBody, TableRow, Pagination, } from 'react-blur-admin';
import {Col, Row} from "react-flex-proto";

export class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chromeVisits: 1000,
            t1CurrentPage: 1,
            t2CurrentPage: 1,
        };
    }

    t1OnSetCurrentPage(value) {
        this.setState({t1CurrentPage: value});
    }

    t2OnSetCurrentPage(value) {
        this.setState({t2CurrentPage: value});
    }


    render() {
        return (
            <Page>
                <div className="row" style={{margin:"1em"}}>
                    <Panel title='Latest Offers Created'>
                        <Table>
                            <TableHead>
                                <th>Exchange Pair</th>
                                <th>Price</th>
                                <th>Buy</th>
                                <th>Sell</th>
                                <th>Timestamp</th>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                                <TableRow>
                                    <td>XRP/CNY </td>
                                    <td>1.99523 </td>
                                    <td>5,126.602014 XRP</td>
                                    <td>10228.75013829875 CNY</td>
                                    <td>17/11/2019 13:29</td>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Row>
                            <Col align='center'>
                                <Pagination currentPage={Number(this.state.t1CurrentPage)} totalPages={5} onChange={value => this.t1OnSetCurrentPage(value)} />
                            </Col>
                        </Row>
                    </Panel>
                </div>
            </Page>

        )
    }
}