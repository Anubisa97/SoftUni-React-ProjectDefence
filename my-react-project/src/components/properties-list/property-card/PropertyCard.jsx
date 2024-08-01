import { Link, } from "react-router-dom";

export default function PropertyCard() {
    // const propertyID = ""

    return (
        <div className="col-lg-4 col-md-6col-lg-4 col-md-6">
            <Link to="/properties/details">
                <div className="blog_img"><img src="images/img-4.png" /></div>
                <div className="image_box">
                    <div className="left_box">
                        <h2 className="offer_type">for sale<br />
                            <span>4 bedroom apartment,</span>
                            <span>240 m<sup>2</sup></span>
                        </h2>
                        <div className="area_main">
                            <h3 className="location"><i className="location_icon fa fa-map-marker offer_icon" ></i><span>Sofia, Center, Han Asparuh str.</span></h3>
                        </div>
                    </div>
                    <div className="rate_text">379 000 EUR</div>
                </div>
            </Link>

        </div>

    );
}



