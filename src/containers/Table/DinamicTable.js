import React, { Component, Suspense } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
class DinamicTable extends Component {
    data = [];
    ignoreColumns = [];
    customData = {};
    customRender = {};

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.setState({ data: this.props.data })
        this.ignoreColumns = this.props.ignoreColumns != undefined ? this.props.ignoreColumns : [];
        this.customData = this.props.customData;
        this.customRender = this.props.customRender;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data != this.props.data) {
            this.setState({ data: this.props.data });
        }
    }

    render() {
        const RenderRow = (props) => {
            return props.keys.map((key, index) => {
                if (rideItems.indexOf(index) == -1) {
                    var row = null;
                    if (this.customRender != null) {
                        row = this.customRender(props.data, key);
                    } else if (row === null) {
                        row = <td key={props.data[key]}>{props.data[key]}</td>
                    }
                    return row;
                }
            })
        }

        const CustomHeader = (props) => {
            return this.props.customHeader;
        }

        var rideItems = [];

        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> {this.props.title} <small className="text-muted">{this.props.smalTitle}</small>
                    <small>            </small>
                    {this.props.customHeader? <CustomHeader></CustomHeader> : null}
                </CardHeader>
                <CardBody>
                    <Table responsive hover data={this.state.data} >
                        <thead>
                            <tr>
                                {
                                    Object.keys(this.customData != null ? this.customData(this.state.data[0]) : this.state.data[0]).map((key, index) => {
                                        if (this.ignoreColumns != null && this.ignoreColumns.indexOf(key) == -1) {
                                            return <th key={key}>{key}</th>
                                        } else {
                                            rideItems.push(index);
                                        }
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((row, index) =>
                                <tr key={index}>
                                    <RenderRow key={index} data={this.customData != null ? this.customData(row) : row} keys={Object.keys(this.state.data[0])} />
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}

export default DinamicTable