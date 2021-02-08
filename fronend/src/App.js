import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Task } from './Task'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const[change , setChane] = useState(true)
  useEffect(() => {
    // effect
    axios.get('/api/tasks')
      .then(data => {
        console.log(data)
        setTasks(data.data.filter(ele => typeof(ele.id)== "number" ))
      })
  }, [change])

  const addTask = (e) => {
    e.preventDefault()

    axios.post('http://127.0.0.1:8000/api/task/new', JSON.stringify({ title: title, completed: false }) , { headers: {
      "Content-type": "application/json"
    }})
      .then(data => setChane(pre => !pre))
      .catch(err => console.log("arr",err))
  }
  console.log(title)
  return (
    <div className="App">
      <Container className="mt-5 bg-light pb-5">
        <Row className=" mt-5 justify-content-md-center">
          <Col lg="8" md="8">
            <Form onSubmit={addTask}>
              <Form.Label className="red"> add your task</Form.Label>
              <Row>
                <Col md="6"> <Form.Control onChange={({ target }) => setTitle(target.value)}></Form.Control></Col>
                <Col md="3"><Button variant="outline-success" type="submit"> add your task</Button></Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {tasks.map(ele => <Task setChane={setChane} {...ele} />)}
        <Task />

      </Container>
    </div>
  );
}

export default App;
