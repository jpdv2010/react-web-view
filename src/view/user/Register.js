import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { FormGroup, CardHeader,FormFeedback, Label} from 'reactstrap';

class Register extends Component {
    render(){
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                            <Form>
                                <h1>Register</h1>
                                <p className="text-muted">Create your account</p>
                                <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="icon-user"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Username" autoComplete="username" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>@</InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Email" autoComplete="email" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="icon-lock"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" placeholder="Password" autoComplete="new-password" />
                                </InputGroup>
                                <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="icon-lock"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                                </InputGroup>
                                <Button color="success" block>Create Account</Button>
                            </Form>
                            </CardBody>
                            <CardFooter className="p-4">
                            <Row>
                                <Col xs="12" sm="6">
                                <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                                </Col>
                                <Col xs="12" sm="6">
                                <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                                </Col>
                            </Row>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6">
                            <Card>
                            <CardHeader>
                                <strong>Validation feedback</strong> Form
                            </CardHeader>
                            <CardBody>
                                <Form className="was-validated">
                                <FormGroup>
                                    <Label htmlFor="inputSuccess2i">Non-required input</Label>
                                    <Input type="text" className="form-control-success" id="inputSuccess2i" />
                                    <FormFeedback valid>Non-required</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="inputWarning2i">Required input</Label>
                                    <Input type="text" className="form-control-warning" id="inputWarning2i" required />
                                    <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                                    <FormFeedback valid className="help-block">Input provided</FormFeedback>
                                </FormGroup>
                                </Form>
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;