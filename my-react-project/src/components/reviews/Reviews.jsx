import { Link } from "react-router-dom";


export default function Reviews() {
    return (
        <div className="customer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="customer_taital_main">
                            <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
                            <hr className="customer_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="my_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="customer_section_2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box_main">
                                            <div className="customer_main">
                                                <div className="customer_left">
                                                    <div className="customer_img"><img src="images/customer-img.png" /></div>
                                                </div>
                                                <div className="customer_right">
                                                    <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png" /></span></h3>
                                                    <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="customer_section_2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box_main">
                                            <div className="customer_main">
                                                <div className="customer_left">
                                                    <div className="customer_img"><img src="images/customer-img.png" /></div>
                                                </div>
                                                <div className="customer_right">
                                                    <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png" /></span></h3>
                                                    <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="customer_section_2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box_main">
                                            <div className="customer_main">
                                                <div className="customer_left">
                                                    <div className="customer_img"><img src="images/customer-img.png" /></div>
                                                </div>
                                                <div className="customer_right">
                                                    <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png" /></span></h3>
                                                    <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#my_slider" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </Link>
                <Link className="carousel-control-next" to="#my_slider" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}