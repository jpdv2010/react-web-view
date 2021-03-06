import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import citiesData from './CitiesData';
import usersData from '../user/UsersData';

import DinamicTable from '../../containers/Table/DinamicTable';

class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityId: -1,
      citiesList: [],
      users: [],
      showingUsers: [],
      cityName: ""
    }

    this.toggleCity = this.toggleCity.bind(this);
  }

  componentWillMount() {
    this.state.citiesList = citiesData.filter((city) => city.id < 10);
    this.state.users = usersData;
  }

  customData = (city) => {
    city.verUsuarios = 'Ver Usuários';
    return city;
  }

  customRender = (data, key) => {
    if (key === 'verUsuarios') {
      return <td key={data[key]}><Button block color="link" onClick={() => { this.toggleCity(data['id'], data['name']) }}>{data[key]}</Button></td>
    }
    return <td key={data[key]}>{data[key]}</td>
  }

  toggleCity(id, name) {
    this.handleSubmit(id);
    this.setState({ cityName: name });
  }

  async handleSubmit(id) {
    const response = await axios.get('http://localhost:8181/user/city/' + id);
    this.setState({ showingUsers: response.data });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={4}>
            <DinamicTable data={this.state.citiesList} ignoreColumns={['id']} title={"Cidades"} smalTitle={"cities"} customRender={this.customRender} customData={this.customData} />
          </Col>
          {this.state.showingUsers.length > 0 ?
            <Col xl={8}>
              <DinamicTable data={this.state.showingUsers} ignoreColumns={['id', 'city']} title={"Usuarios de " + this.state.cityName} smalTitle={this.state.cityName + "'s users"} />
            </Col>
            :
            <Col xl={8}>
              <strong><i className="icon-info pr-1"></i>Esta cidade nao possui Usuários</strong>
            </Col>
          }
        </Row>
      </div>
    )
  }
}

export default Cities;