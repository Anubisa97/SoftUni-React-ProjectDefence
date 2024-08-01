import { Link } from "react-router-dom";


export default function ContactUs() {
    return (
        <div>
            <div className="contact_section layout_padding" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact_taital_main">
                            <h1 className="contact_taital">Requeste A Call Back</h1>
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
                                <form action="">
                                    <input type="text" className="mail_text" placeholder="Name" name="Name" />
                                    <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" />
                                    <input type="text" className="mail_text" placeholder="Email" name="Email" />
                                    <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                                    <div className="btn_main">
                                        <div className="send_bt active"><Link to="#">Send Now</Link></div>
                                        <div className="map_bt"><Link to="#" id="showMap">Map</Link></div>
                                    </div>
                                </form>
                                {/* <div className="map_main map_container">
                                    <div className="map-responsive">
                                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="368" frameBorder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
                                        <div className="btn_main">
                                            <div className="map_bt d-flex justify-content-center w-100 map_center"><Link to="#" id="showForm">Form</Link></div>
                                        </div>
                                    </div>
                                </div> */}
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