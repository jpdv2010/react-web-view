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

  function Header(props){
    const key = props.key;
    return (<th scope="col">{key}</th>);
  }

class Users extends Component {
  render () {
    console.log(usersData);
    const userList = usersData.filter((user) => user.id < 10)
    
    function userModifier(user) {
      user.name = user.name + " " + user.lastname;
      return user;
    }

    return (
        <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <DinamicTable data={userList} ignoreColumns={['lastname','id']} rowModifier={userModifier()}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;