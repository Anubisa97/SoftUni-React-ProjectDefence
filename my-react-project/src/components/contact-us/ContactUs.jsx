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
                                        <div className="send_bt active"><Link to="/">Send Now</Link></div>
                                    </div>
                                </form>
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