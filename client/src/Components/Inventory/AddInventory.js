import React from 'react';
// import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import models from '../../categories.json';

export function AddInventory() {
    // const [models, setModels] = useState([]);

    // useEffect(() => {
    //     setModels()
    // }, [])

    return (
        <Container>
            <Row>
                <Form>
                    <Form.Group controlId='model'>
                        <Form.Label>Inventory Type?</Form.Label>
                        <Form.Control as='select'>
                            {
                                models.map((model, index) => {
                                    console.log(model)
                                    return (<option key={index} value={model}>{model}</option>)
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='opt2'>
                        <Form.Label>Inventory Type?</Form.Label>
                        <Form.Control as='select'>
                            {}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}
