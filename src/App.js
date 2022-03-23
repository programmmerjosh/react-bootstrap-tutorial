import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";

function App() {

  return (
    <div className="App">
      <Container className="bg-dark">
        <Form>
          <Row>
          {/* no need to put className="md" JUST md as an empty prop for bootstrap responsive implementation */}
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
                <Form.Text className="text-muted">
                  We'll never share your email address. Trust us!
                </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit" className="my-2">Login</Button>
        </Form>
        <Card className="mb-3" style={{color: "black"}}>
          <Card.Img src="https://picsum.photos/400/100" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>
              This is an example of a react bootstrap card
            </Card.Text>
            <Button variant="warning">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Breadcrumb Item</Breadcrumb.Item>
          <Breadcrumb.Item>Breadcrumb Item</Breadcrumb.Item>
          <Breadcrumb.Item active>Active Breadcrumb Item</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is an alert</Alert>
        <Button className="mb-3">Test Button</Button>
      </Container>
    </div>
  );
}

export default App;
