import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';



export const Task = ({ title }) => {
    return (
        <>
            <Row className=" bg-light mt-1 justify-content-md-center">




                <Col md="6" className="task">
                    {title}
                </Col>
                <Col md="4" className="task" >
                    <Button variant="outline-dark" className="mr-2">
                        done
               </Button>
                    <Button variant="outline-danger">
                        delete
                     </Button>
                </Col>

            </Row>

        </>
    )
}
