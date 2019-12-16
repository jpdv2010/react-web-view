import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { FormGroup, CardHeader,FormFeedback, Label} from 'reactstrap';
import userData from './UsersData';
import usersData from './UsersData';
import cityData from '../city/CitiesData';

class UserRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            age: null,
            role: 'ADMIN',
            gender: 'M',
            city: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event, name) {
        switch (name) {
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'lastname':
                this.setState({lastname: event.target.value});
                break;
            case 'age':
                this.setState({age: event.target.value});
                break;
            case 'role':
                this.setState({role: event.target.value});
                break;
            case 'gender':
                this.setState({gender: event.target.value});
                break;
            case 'city':
                this.setState({city: event.target.value});
                break;
        }
    }

    handleClick() {
        var user = {
            name: this.state.name,
            lastname: this.state.lastname,
            age: this.state.age,
            role: this.state.role,
            gender: this.state.gender,
            city: this.state.city
        }
        if(this.props.afterConfirmAction != null) {
            this.props.afterConfirmAction(user);
        }
    }
    
    render(){
        return (
            <div className="app flex-row align-items-center">
                <CardBody className="p-4">
                    <Form  className="was-validated">
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'name')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="Name" autoComplete="name" required/>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>
                        
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'lastname')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="Lastname" autoComplete="lastname" required/>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-calendar"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'age')} type="number" className="form-control-warning" id="inputWarning2i" placeholder="Age" autoComplete="age" required/>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-briefcase"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="select" name="ccmonth" id="ccmonth" onChange={(event) => this.handleChange(event, 'role')} placeholder="Gender" required>
                                <option value="ADMIN">admin</option>
                                <option value="SALESMAN">salesman</option>
                                <option value="CUSTOMER">customer</option>
                            </Input>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="select" name="ccmonth" id="ccmonth" onChange={(event) => this.handleChange(event, 'gender')} placeholder="Gender" required>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </Input>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-location-pin"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="select" name="ccmonth" id="ccmonth" onChange={(event) => this.handleChange(event, 'city')} placeholder="City" required>
                                {
                                    cityData.map((row, index) => 
                                        <option value={row.id}>{row.name}</option>
                                    )
                                }
                            </Input>
                            <FormFeedback className="help-block">Insira um valor válido</FormFeedback>
                            <FormFeedback valid className="help-block">Válido!</FormFeedback>
                        </InputGroup>
                        
                        <Button onClick={this.handleClick} color="success" block>Criar Usuário</Button>
                    </Form>
                </CardBody>
            </div>
        );
    }
}

export default UserRegister;