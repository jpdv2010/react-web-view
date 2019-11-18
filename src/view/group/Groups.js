import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import groupData from './GroupData';
import DinamicTable from '../../containers/Table/DinamicTable';

class Users extends Component {
  
  customRender = (data, key) =>{
      if(data["members"] >= 20){
        return <td style={{ color: 'red' }} key={data[key]}>{data[key]}</td>
      }
      return <td key={data[key]}>{data[key]}</td>
  }

  render () {
    const groupList = groupData.filter((user) => user.id < 10)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <DinamicTable data={groupList} ignoreColumns={['id']} customRender={this.customRender} title={"Groups"} smalTitle={"exaample"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;