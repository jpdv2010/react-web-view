import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Alert, Button, Col, Row,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

import usersData from './UsersData';
import UserRegister from './UserRegister';
import DinamicTable from '../../containers/Table/DinamicTable';

class Users extends Component {

  constructor(props) {
    super(props);
    this.dataModifier = this.dataModifier.bind(this);
    this.state = {
      modal : false,
      userList : []
    }

    this.afterConfirmAction = this.afterConfirmAction.bind(this);
    this.toggle = this.toggleModal.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8181/user`)
      .then(res => {
        const userList = res.data;
        this.setState({ userList });
      }).catch( function( error ) {
        console.log(error);
      })
  }

  dataModifier = (user) => {
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
    return (<Button active color="success" aria-pressed="true" onClick={() => {this.toggleModal()}}>
        <i className="icon-user-follow"></i>&nbsp;Adicionar Usuário
    </Button>)
  }

  toggleModal() {
    this.setState({modal : !this.state.modal});
  }

  afterConfirmAction(user = null) {
    if(user != null) {
      axios.post(`http://localhost:8181/user`, user )
      .then(res => {
        const user = res.data;
        var userList = this.state.userList;
        userList.push(res.data);
        this.setState(userList);
        this.state.userList.push(user);
      }).catch( function( error ) {
        console.log(error);
      })
    }
    this.setState({modal : false});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          
          <Col xl={12}>
            {this.state.userList != null && this.state.userList.length > 0?
            <DinamicTable customHeader={this.customHeader()} data={this.state.userList} ignoreColumns={['name', 'lastname', 'id', 'city']} customRender={this.customRender} customData={this.dataModifier} title={"Usuarios"} smalTitle={"users"} />
            : null}
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={'modal-md ' + this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Register</ModalHeader>
          <ModalBody>
            <UserRegister afterConfirmAction={this.afterConfirmAction}></UserRegister>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Users;