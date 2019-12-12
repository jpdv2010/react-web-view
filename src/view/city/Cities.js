import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import citiesData from './CitiesData';
import DinamicTable from '../../containers/Table/DinamicTable';

class Cities extends Component {

  citiesList = [];

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.citiesList = citiesData.filter((city) => city.id < 10);
  }

  render () {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <DinamicTable data={this.cityList} title={"Cities"} smalTitle={"cities"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Cities;