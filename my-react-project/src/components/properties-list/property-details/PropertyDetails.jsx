import { useEffect } from "react";
import { useState } from "react";
import { getOne } from "../../../api/propertiesAPI";
import { useParams } from "react-router";



export default function PropertyDetails() {
    const [property, setProperty] = useState([]);
    const { propertyId } = useParams()

    useEffect(() => {
        getOne(propertyId)
            .then(property => setProperty(property))
    }, [])

    return (
        <div className="details_box">
            <div className="details_image"><img src={property.img_url} /></div>
            <div className="image_box">
                <div className="left_box">
                    <h2 className="details_offer_type">{property.type_offer}<br />
                        <span>{property.type_property},</span>
                        <span>{property.area} m<sup>2</sup></span>
                    </h2>
                    <div className="area_main">
                        <h3 className="details_location"><i className="location_icon fa fa-map-marker offer_icon" ></i><span>{property.city}, {property.district}</span></h3>
                        <div className="details_rate_text" ><span>{property.price} EUR</span></div>
                    </div>

                    <div className="area_main" style={{ display: "block" }}>
                        <h3 className="details_description"><span>Description:</span></h3>
                        <h3 className="details_location"><span>{property.description}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}