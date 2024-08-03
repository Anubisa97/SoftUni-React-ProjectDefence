
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Error from '../error/Error';

const initialValues = { email: '', password: '' }

export default function Login() {
    const [error, setError] = useState('')
    const login = useLogin()
    const navigate = useNavigate()

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler)

    return (
        <div>
            <div className="contact_section " />
            <div className="container">
                <div className="row">
                    {error && <Error errorMessage={error} />}
                    <div className="col-sm-12">
                        <div className="contact_taital_main">
                            <h1 className="contact_taital">Login</h1>
                            <hr className="contact_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-6" style={{ paddingRight: "100px" }}>
                            <div className="mail_section map_form_container">
                                <Form onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={changeHandler}
                                            placeholder="Enter email"
                                        />
                                        <Form.Text className="text-muted">
                                            We`&apos;`ll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "20px" }} className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            type="password"
                                            name='password'
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    <Button style={{ marginTop: "15px" }} variant="warning" size="lg" type="submit">
                                        Login
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
        </div >
    );
}