import { useNavigate, useParams } from 'react-router';

import { useForm } from '../../hooks/useForm';
import { useGetOneProperty } from '../../hooks/useProperties';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateProperty } from '../../api/propertiesAPI';

const initialValues = {
    type_offer: '',
    type_property: '',
    city: '',
    district: '',
    street: '',
    area: '',
    price: '',
    number: '',
    img_url: '',
    description: '',
}

export default function EditProperty() {
    const { propertyId } = useParams()
    const [property] = useGetOneProperty(propertyId)

    const navigate = useNavigate()

    // const createProperty = useCreateProperties()

    // const creteHandler = async (values) => {
    //     try {
    //         const { _id } = await createProperty(values)
    //         navigate(`/properties/details/${_id}`)
    //     } catch (error) {
    //         // TODO: Set error state and display error
    //         console.error(error);
    //     }
    // }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(Object.assign(initialValues, property), async (values) => {
        console.log(values);
        await updateProperty(propertyId, values)
        navigate(`/properties/details/${propertyId}`)
    });

    return (
        <div>
            <div className="contact_section layout_padding" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact_taital_main">
                            <h1 className="contact_taital">Edit your property</h1>
                            <hr className="contact_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mail_section map_form_container" style={{ paddingRight: "50px" }}>
                                <Form onSubmit={submitHandler}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                Type of offer</Form.Label>
                                            <Form.Select
                                                required
                                                name='type_offer'
                                                value={values.type_offer}
                                                onChange={changeHandler}
                                                className='nice-select mdb-select md-form md-outline colorful-select dropdown-primary'>
                                                <option>...</option>
                                                <option value="For Sale">For Sale</option>
                                                <option value="For Rent">For Rent</option>

                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                Type of property</Form.Label>
                                            <Form.Select
                                                required
                                                name='type_property'
                                                value={values.type_property}
                                                onChange={changeHandler}
                                                className='nice-select '>
                                                <option>...</option>
                                                <option value="1 Room Apartment">1 Room Apartment</option>
                                                <option value="2 Room Apartment">2 Room Apartment</option>
                                                <option value="3 Room Apartment">3 Room Apartment</option>
                                                <option value="4 Room Apartment">4 Room Apartment</option>
                                                <option value="MAISONETTE">Maisonette</option>
                                                <option value="STUDIO, ATTIC">Studio, Attic</option>
                                                <option value="FLOOR">Floor</option>
                                                <option value="Office">Office</option>
                                                <option value="Villa">Villa</option>
                                                <option value="Warehouse">Warehouse</option>
                                                <option value="Garage, Parking space">Garage, Parking space</option>
                                                <option value="Hotel">Hotel</option>
                                                <option value="Land">Land</option>
                                                <option value="Plot">Plot</option>
                                                <option value="Business Property">Business Property</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                City</Form.Label>
                                            <Form.Select
                                                required
                                                name='city'
                                                value={values.city}
                                                onChange={changeHandler}
                                                className='nice-select '>
                                                <option>...</option>
                                                <option value="Sofia">Sofia</option>
                                                <option value="Varna">Varna</option>
                                                <option value="Plovdiv">Plovdiv</option>
                                                <option value="Ruse">Ruse</option>
                                                <option value="Burgas">Burgas</option>
                                                <option value="Veliko Tarnovo">Veliko Tarnovo</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>
                                                District</Form.Label>
                                            <Form.Select
                                                required
                                                name='district'
                                                value={values.district}
                                                onChange={changeHandler}
                                                className='nice-select '>
                                                <option>...</option>
                                                <option value="Banishora">Banishora</option>
                                                <option value="Iztok">Iztok</option>
                                                <option value="Boqna">Boqna</option>
                                                <option value="Lulin">Lulin</option>
                                                <option value="Mladost">Mladost</option>
                                            </Form.Select>
                                        </Form.Group>

                                    </Row>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Street name:</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            name='street'
                                            value={values.street}
                                            onChange={changeHandler}
                                            placeholder="bul.Vitosha" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Square meters:</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            name='area'
                                            value={values.area}
                                            onChange={changeHandler}
                                            placeholder="154" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Price in EUR:</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            name='price'
                                            value={values.price}
                                            onChange={changeHandler}
                                            placeholder="250000" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            name='number'
                                            value={values.number}
                                            onChange={changeHandler}
                                            placeholder="088..." />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "20px" }} className="mb-3" controlId="formBasicText">
                                        <Form.Label>Picture URL</Form.Label>
                                        <Form.Control
                                            required
                                            className='nice-select'
                                            name='img_url'
                                            value={values.img_url}
                                            onChange={changeHandler}
                                            placeholder="https://..." />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: "20px" }} className="mb-3" controlId="formBasicText">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            rows={5}
                                            className='nice-select'
                                            name='description'
                                            value={values.description}
                                            onChange={changeHandler}
                                            placeholder="Your offer descirption" />
                                    </Form.Group>

                                    <Button style={{ marginTop: "15px" }} variant="warning" size="lg" type="submit">
                                        Save
                                    </Button>
                                </Form>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_img"><img src="../../../images/contact-img.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}