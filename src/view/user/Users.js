import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData';
import DinamicTable from '../../containers/Table/DinamicTable';

function UserRow(props) {
  const user = props.user;
  const index = props.index;
  
  const getGender = (gender) => {
    return gender == "M"? "Male" : "Female"
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row">{user.name + " " + user.lastname}</th>
      <td>{user.age}</td>
      <td>{user.role}</td>
      <td>{getGender(user.gender)}</td>
    </tr>
  )
}

class Users extends Component {

  constructor(props){
    super(props);
    this.userModifier = this.userModifier.bind(this);
  }

  userModifier = (user) => {
    user.name = user.name + " " + user.lastname;
    return user;
  }

  render () {
    const userList = usersData.filter((user) => user.id < 10)
    return (
        <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <DinamicTable data={userList} ignoreColumns={['lastname','id']} rowModifier={this.userModifier} title={"Users"} smalTitle={"exaample"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;