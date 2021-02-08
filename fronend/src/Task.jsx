import axios from 'axios';
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';



export const Task = ({ title , id ,completed , setChane}) => {

  const  updateTodone =()=> {

    axios.post(`/api/task/${id}/update` ,  JSON.stringify({ title: title, completed: true }) , { headers: {
        "Content-type": "application/json"
      }} )
      .then(data =>setChane(pre => !pre))
      .catch(err => console.log(err))

    } 
    const  deleteTodone =()=> {

        axios.delete(`/api/task/${id}/delete`)
        .then(data =>setChane(pre => !pre))
        .catch(err => console.log(err))} 

    return (
        <>
            <Row className=" bg-light mt-1 justify-content-md-center">




                <Col md="6" className="task">
                    {completed? <h2 style={{textDecoration :'line-through' , color:"red" }}>{title}</h2>  :  <h2> {title} </h2> }
                </Col>
                <Col md="4" className="task" >
                    <Button onClick={()=>updateTodone()} variant="outline-dark" className="mr-2">
                        done
               </Button>
                    <Button onClick={deleteTodone} variant="outline-danger">
                        delete
                     </Button>
                </Col>

            </Row>

        </>
    )
}
