import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { FormGroup, CardHeader,FormFeedback, Label} from 'reactstrap';
import userData from './UsersData';
import usersData from './UsersData';

class UserRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            age: null,
            role: '',
            gender: '',
            city: ''
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
            id: this.getId(),
            name: this.state.name,
            lastname: this.state.lastname,
            age: this.state.age,
            role: this.state.age,
            gender: this.state.gender,
            city: this.state.city
        }
        if(this.props.afterConfirmAction != null) {
            this.props.afterConfirmAction(user);
        }
    }

    getId(){
        var maxId = 0;
        for(var i = 0; i < usersData.length; i++) {
            if(usersData[i].id > maxId) {
                maxId = usersData[i].id;
            } 
        }

        return maxId + 1;
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
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>
                        
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'lastname')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="Lastname" autoComplete="lastname" required/>
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'age')} type="number" className="form-control-warning" id="inputWarning2i" placeholder="Age" autoComplete="age" required/>
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'role')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="Role" autoComplete="Role" required/>
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'gender')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="Gender" autoComplete="gender" required/>
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="icon-user"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input value={this.state.value} onChange={(event) => this.handleChange(event, 'city')} type="text" className="form-control-warning" id="inputWarning2i" placeholder="City" autoComplete="city" required/>
                            <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                            <FormFeedback valid className="help-block">Input provided</FormFeedback>
                        </InputGroup>
                        
                        <Button onClick={this.handleClick} color="success" block>Create Account</Button>
                    </Form>
                </CardBody>
            </div>
        );
    }
}

export default UserRegister;