import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Col, Row,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import usersData from './UsersData';
import UserRegister from './UserRegister';
import DinamicTable from '../../containers/Table/DinamicTable';

class Users extends Component {

  userList = [];

  constructor(props) {
    super(props);
    this.userModifier = this.userModifier.bind(this);
    this.state = {
      modal : false
    }

    this.afterConfirmAction = this.afterConfirmAction.bind(this);
  }

  componentWillMount() {
    this.userList = usersData.filter((user) => user.id < 10);
  }

  userModifier = (user) => {
    user.fullname = user.name + " " + user.lastname;
    user.teste = (user.gender == "F" || user.gender == "Female") && user.age >= 25 ? "Sim" : "Não";
    user.gender = user.gender == "F" || user.gender == "Female" ? "Female" : "Male";
    return user;
  }

  customRender = (data, key) => {
    if (key === 'fullname') {
      return <td><Link to={'/users/' + data["id"]}>{data["fullname"]}</Link></td>
    }
    return <td key={data[key]}>{data[key]}</td>
  }

  customHeader = () => {
    return (<Button active color="success" aria-pressed="true" onClick={() => {this.toggle()}}>
        <i className="icon-user-follow"></i>&nbsp;Adicionar Usuário
    </Button>)
  }

  toggle() {
    this.setState({modal : !this.state.modal});
  }

  afterConfirmAction(object = null) {
    if(object != null) {
      this.userList.push(object);
    }
    this.setState({modal : false});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          
          <Col xl={12}>
            <DinamicTable customHeader={this.customHeader()} data={this.userList} ignoreColumns={['name', 'lastname', 'id', 'city']} customRender={this.customRender} customData={this.userModifier} title={"Usuarios"} smalTitle={"users"} />
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-md ' + this.props.className}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <UserRegister afterConfirmAction={this.afterConfirmAction}></UserRegister>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Users;