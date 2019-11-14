import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import groupData from './GroupData';
import DinamicTable from '../../containers/Table/DinamicTable';

class Users extends Component {
  render () {
    const groupList = groupData.filter((user) => user.id < 10)
    return (
        <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Groups <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <DinamicTable data={groupList} ignoreColumns={['id']}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;