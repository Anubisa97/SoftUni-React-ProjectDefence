import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <div>
            <div className="contact_section " />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact_taital_main">
                            <h1 className="contact_taital">Create an account</h1>
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group style={{ marginTop: "15px" }} className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "15px" }} className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button style={{ marginTop: "15px" }} variant="warning" size="lg" type="submit">
                                        Register
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