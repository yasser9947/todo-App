import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Task } from './Task'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // effect
    axios.get('/api/tasks')
      .then(data => {
        console.log(data)
        setTasks(data.data)
      })
  }, [])

  return (
    <div className="App">
      <Container className="mt-5 bg-light pb-5">
        <Row className=" mt-5 justify-content-md-center">
          <Col lg="8" md="8">
            <Form>
              <Form.Label class="red"> add your task</Form.Label>
              <Row>
                <Col md="6"> <Form.Control ></Form.Control></Col>
                <Col md="3"><Button variant="outline-success"> add your task</Button></Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {tasks.map(ele => <Task title={ele.title} />)}
        <Task />

      </Container>
    </div>
  );
}

export default App;
