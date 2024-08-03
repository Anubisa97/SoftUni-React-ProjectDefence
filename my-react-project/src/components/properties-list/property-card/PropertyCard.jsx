/* eslint-disable react/prop-types */
import { Link, } from "react-router-dom";

export default function PropertyCard({
    type_offer,
    type_property,
    city,
    district,
    street,
    area,
    price,
    img_url,
    _id
}) {

    return (
        <div className="col-lg-4 col-md-6col-lg-4 col-md-6">
            <Link to={`/properties/details/${_id}`}>
                <div className="blog_img"><img src={img_url} /></div>
                <div className="image_box">
                    <div className="left_box">
                        <h2 className="offer_type">{type_offer}<br />
                            <span>{type_property},</span>
                            <span>{area} m<sup>2</sup></span>
                        </h2>
                        <div className="area_main">
                            <h3 className="location"><i className="location_icon fa fa-map-marker offer_icon" ></i><span>{city}, {district}, {street}.</span></h3>
                        </div>
                    </div>
                    <div className="rate_text">{price} EUR</div>
                </div>
            </Link>

        </div>

    );
}



