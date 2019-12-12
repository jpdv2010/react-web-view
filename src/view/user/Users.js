import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData';
import DinamicTable from '../../containers/Table/DinamicTable';

class Users extends Component {

  userList = [];

  constructor(props){
    super(props);
    this.userModifier = this.userModifier.bind(this);
  }

  componentWillMount() {
    this.userList = usersData.filter((user) => user.id < 10);
  }

  userModifier = (user) => {
    user.fullname = user.name + " " + user.lastname;
    user.teste = (user.gender == "F" || user.gender == "Female") && user.age >= 25? "Sim" : "Não";
    user.gender = user.gender == "F" || user.gender == "Female"? "Female" : "Male";
    return user;
  }

  render () {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <DinamicTable data={this.userList} ignoreColumns={['name','lastname','id']} customData={this.userModifier} title={"Users"} smalTitle={"example"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;