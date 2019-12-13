import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  customRender = (data, key) => {
    if(key === 'fullname'){
      return <td><Link to={'/users/' + data["id"]}>{data["fullname"]}</Link></td>
    }
    return <td key={data[key]}>{data[key]}</td>
  }

  render () {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <DinamicTable data={this.userList} ignoreColumns={['name', 'lastname', 'id', 'city']} customRender={this.customRender} customData={this.userModifier} title={"Usuarios"} smalTitle={"users"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;