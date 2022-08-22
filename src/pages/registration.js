
import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

export function RegistrationForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [npi, setNPI] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            npi,
            addressLine1,
            addressLine2,
            city,
            state,
            zip,
            phone,
            email
        }
        console.log(data)
    }

    return (
        <div className='form-container'>
            <Container>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col className='form-header'>
                            <h1>
                                Registration Form
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="input" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="input" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="npi">
                                    <Form.Label>NPI</Form.Label>
                                    <Form.Control type="input" name="npi" value={npi} onChange={e => setNPI(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="address-line-1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control type="input" name="addressLine1" value={addressLine1} onChange={e => setAddressLine1(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="address-line-2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control type="input" name="addressLine2" value={addressLine2} onChange={e => setAddressLine2(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="input" name="city" value={city} onChange={e => setCity(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="input" name="state" value={state} onChange={e => setState(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="zip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="input" name="zip" value={zip} onChange={e => setZip(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}