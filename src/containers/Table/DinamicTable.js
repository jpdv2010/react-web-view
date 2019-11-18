import React, { Component, Suspense } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class DinamicTable extends Component {
    render () {
        const data = this.props.data;
        const ignoreColumns = this.props.ignoreColumns;
        const customData = this.props.customData;
        const customRender = this.props.customRender;
        
        const RenderRow = (props) =>{
            return props.keys.map((key, index)=>{
                if(rideItems.indexOf(index) == -1){
                    var row = {};
                    if(customRender != null){
                        row = customRender(props.data, key);
                    } else {
                        row = <td key={props.data[key]}>{props.data[key]}</td>
                    }
                    return row;
                }
            })
        }

        var rideItems = [];
        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> {this.props.title} <small className="text-muted">{this.props.smalTitle}</small>
                </CardHeader>
                <CardBody>
                    <Table responsive hover data={this.data} >
                        <thead>
                        <tr>
                            {
                                Object.keys(customData != null? customData(data[0]) : data[0]).map((key, index) => {
                                    if(ignoreColumns.indexOf(key) == -1){
                                        return <th key={key}>{key}</th>
                                    } else {
                                        rideItems.push(index);
                                    }
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, index) => 
                                    <tr key={index}>
                                        <RenderRow key={index} data={ customData != null? customData(row) : row } keys={Object.keys(data[0])}/>    
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