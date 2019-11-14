import React, { Component, Suspense } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class DinamicTable extends Component {
    render () {
        const fixedData = this.props.data;
        const data = this.props.data;
        const ignoreColumns = this.props.ignoreColumns;
        const RenderRow = (props) =>{
            
            return props.keys.map((key, index)=>{
                if(indexToNotShow.indexOf(index) == -1){
                    return <td key={props.data[key]}>{props.data[key]}</td>
                }
            })
        }
        var indexToNotShow = [];
        return (
                <Table responsive hover data={this.data} >
                    <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => {
                            if(ignoreColumns.indexOf(key) == -1){
                                return <th key={key}>{key}</th>
                            } else {
                                indexToNotShow.push(index);
                            }
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, index) =>
                                 <tr key={index}><RenderRow key={index} data={row} keys={Object.keys(data[0])}/></tr>
                    )}
                    </tbody>
                </Table>
        )
      }
}

export default DinamicTable