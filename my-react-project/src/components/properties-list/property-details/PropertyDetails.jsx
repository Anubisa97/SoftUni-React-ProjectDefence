import { useParams } from "react-router";

import { useNavigate } from 'react-router';

import { useGetOneProperty } from "../../../hooks/useProperties";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { removeProperty } from "../../../api/propertiesAPI";

export default function PropertyDetails() {
    const navigate = useNavigate()
    const { userId } = useContext(AuthContext);
    const { propertyId } = useParams();
    const [property] = useGetOneProperty(propertyId);

    const isOwner = property._ownerId === userId;

    const propertyDeleteHandler = async () => {
        try {
            await removeProperty(propertyId)

            navigate('/')
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <div className="details_box">
            <div className="details_image">
                <img src={property.img_url} />
            </div>
            <div className="image_box">
                <div className="left_box">
                    <h2 className="details_offer_type">
                        {property.type_offer}
                        <br />
                        <span>{property.type_property},</span>
                        <span>
                            {property.area} m<sup>2</sup>
                        </span>
                    </h2>
                    <div className="area_main">
                        <h3 className="details_location">
                            <i className="location_icon fa fa-map-marker offer_icon"></i>
                            <span>
                                {property.city}, {property.district}, {property.street}.
                            </span>
                        </h3>
                        <div className="details_rate_text">
                            <span>{property.price} EUR</span>
                        </div>
                    </div>

                    <div className="area_main" style={{ display: "block" }}>
                        <h3 className="details_description">
                            <span>Description:</span>
                        </h3>
                        <h3 className="details_location">
                            <span>{property.description}</span>
                        </h3>
                    </div>
                    {/* <Button variant="primary">Like</Button> */}
                    {isOwner && (
                        <div className="modify_btns">
                            <Button variant="success">Edit</Button>
                            <Button onClick={propertyDeleteHandler} variant="danger">Delete</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
