import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Create() {
    return (
        <div>
            <div className="contact_section layout_padding" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact_taital_main">
                            <h1 className="contact_taital">Add an Offer</h1>
                            <hr className="contact_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mail_section map_form_container">

                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                Type of offer</Form.Label>
                                            <Form.Select className='nice-select mdb-select md-form md-outline colorful-select dropdown-primary'>
                                                <option>...</option>
                                                <option value="1">For Sale</option>
                                                <option value="2">For Rent</option>

                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                Type of property</Form.Label>
                                            <Form.Select className='nice-select '>
                                                <option>...</option>
                                                <option value="1">1 room</option>
                                                <option value="2">2 room</option>
                                                <option value="3">3 room</option>
                                                <option value="4">4 room</option>
                                                <option value="5">MAISONETTE</option>
                                                <option value="6">OFFICE</option>
                                                <option value="7">STUDIO, ATTIC</option>
                                                <option value="8">FLOOR</option>
                                                <option value="9">HOUSE</option>
                                                <option value="10">VILLA</option>
                                                <option value="11">WAREHOUSE</option>
                                                <option value="12">GARAGE, PARKING SPACE</option>
                                                <option value="13">HOTEL</option>
                                                <option value="14">LAND</option>
                                                <option value="15">PLOT</option>
                                                <option value="16">BUSINESS PROPERTY</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                City</Form.Label>
                                            <Form.Select className='nice-select '>
                                                <option>...</option>
                                                <option value="1">Sofia</option>
                                                <option value="2">Varna</option>
                                                <option value="3">Plovdiv</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                District</Form.Label>
                                            <Form.Select className='nice-select '>
                                                <option>...</option>
                                                <option value="1">Banishora</option>
                                                <option value="2">Iztok</option>
                                                <option value="3">Boqna</option>
                                            </Form.Select>
                                        </Form.Group>

                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Square meters:</Form.Label>
                                        <Form.Control className='nice-select' placeholder="154" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Price in EUR:</Form.Label>
                                        <Form.Control className='nice-select' placeholder="250000" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control className='nice-select' placeholder="088..." />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "20px" }} className="mb-3" controlId="formBasicText">
                                        <Form.Label>Picture URL</Form.Label>
                                        <Form.Control className='nice-select' placeholder="https://..." />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "20px" }} className="mb-3" controlId="formBasicText">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={5} className='nice-select' placeholder="Your offer descirption" />
                                    </Form.Group>

                                    <Button style={{ marginTop: "15px" }} variant="warning" size="lg" type="submit">
                                        Create
                                    </Button>
                                </Form>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_img"><img src="images/contact-img.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}