

export default function PropertyDetails() {
    return (
        <div className="details_box">
            <div className="details_image"><img src="/images/img-4.png" /></div>
            <div className="image_box">
                <div className="left_box">
                    <h2 className="details_offer_type">for sale<br />
                        <span>4 bedroom apartment,</span>
                        <span>240 m<sup>2</sup></span>
                    </h2>
                    <div className="area_main">
                        <h3 className="details_location"><i className="location_icon fa fa-map-marker offer_icon" ></i><span>Sofia, Center, Han Asparuh str.</span></h3>
                        <div className="details_rate_text" ><span>379 000 EUR</span></div>
                    </div>

                    <div className="area_main" style={{ display: "block" }}>
                        <h3 className="details_description"><span>Description:</span></h3>
                        <h3 className="details_location"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sint, ipsa suscipit perferendis omnis earum voluptates eligendi nesciunt cum in quae velit officia ipsam ducimus quaerat quam voluptatum! Sed, obcaecati. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem error alias incidunt, laborum quibusdam accusantium rerum velit sequi officiis doloremque repellendus vero molestias nesciunt placeat reiciendis ullam voluptas cumque magnam?</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}