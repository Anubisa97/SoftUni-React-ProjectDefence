import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRegister } from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import Error from '../error/Error';

const initialValues = { email: '', password: '', rePassword: '' }


export default function Register() {
    const [error, setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()

    const loginHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            setError('Passwords do not match')
            return
        }

        try {
            await register(email, password)
            navigate('/')
        } catch (error) {
            setError(error.message)
            console.error(error);
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
                            <div className="mail_section map_form_container" style={{ paddingRight: "100px" }}>
                                <Form onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            className='nice-select'
                                            type="email"
                                            name='email'
                                            value={values.email}
                                            onChange={changeHandler}
                                            placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We`&apos;`ll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "15px" }} className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            className='nice-select'
                                            type="password"
                                            name='password'
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "15px" }} className="mb-3" controlId="formBasicRePassword">
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control
                                            className='nice-select'
                                            type="password"
                                            name='rePassword'
                                            value={values.rePassword}
                                            onChange={changeHandler}
                                            placeholder="Password" />
                                        {/* {error && <Form.Text style={{ color: "red" }}>
                                            {error}</Form.Text>} */}
                                    </Form.Group>
                                    <Button style={{ marginTop: "20px" }} variant="warning" size="lg" type="submit">
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

