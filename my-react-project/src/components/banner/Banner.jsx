export default function Banner() {
    return (
        <div className="banner_section layout_padding">
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">Find A Property</h1>
                                    <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                    {/* <div className="started_text"><a href="#">Contact Us</a></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">Find A Property</h1>
                                    <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                    <div className="started_text"><a href="#">Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">Find A Property</h1>
                                    <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                    <div className="started_text"><a href="#">Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}