import { useParams, useNavigate } from "react-router";

import { useGetOneProperty } from "../../../hooks/useProperties";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { removeProperty, updateProperty } from "../../../api/propertiesAPI";
import SaveProperties from "../../save-properties/SaveProperties";

export default function PropertyDetails() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate()
    const { userId } = useContext(AuthContext);
    const { propertyId } = useParams();
    const [property] = useGetOneProperty(propertyId);

    const hasSaved = property.saved_from?.includes(userId)
    const isOwner = property._ownerId === userId;

    const propertyDeleteHandler = async () => {
        if (window.confirm("Please confirm if you want to delete the property")) {
            try {
                await removeProperty(propertyId)

                navigate('/')
            } catch (error) {
                console.error(error);

            }
        }
    }

    const propertySaveHandler = async () => {
        // SaveProperties(userId, propertyId)


        property.saved_from.push(userId)

        await updateProperty(propertyId, property)

        navigate(`/properties/details/${propertyId}`)
    }

    const propertyUnSaveHandler = async () => {
        const userIdIndex = property.saved_from.indexOf(userId)

        property.saved_from.splice(userIdIndex, 1)

        await updateProperty(propertyId, property)

        navigate(`/properties/details/${propertyId}`)

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
                    </div >
                    {isAuthenticated && (<div className="modify_btns_row">
                        {hasSaved || (
                            <div className="modify_btns">
                                <Button onClick={propertySaveHandler} variant="primary"><i
                                    className="fa fa-heart"
                                    aria-hidden="true"
                                ></i> Save</Button>
                            </div>
                        )}
                        {hasSaved && (
                            <div className="modify_btns">
                                <Button onClick={propertyUnSaveHandler} variant="danger"><i
                                    className="fa fa-heart"
                                    aria-hidden="true"
                                ></i> Un Save</Button>
                            </div>
                        )}
                        {isOwner && (
                            <div className="modify_btns">
                                <Button href={`/properties/details/${propertyId}/edit`} variant="success">
                                    Edit
                                </Button>

                                <Button onClick={propertyDeleteHandler} variant="danger">Delete</Button>
                            </div>
                        )}
                    </div>)}

                </div>
            </div>
        </div>
    );
}
