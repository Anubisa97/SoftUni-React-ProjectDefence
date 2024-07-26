export default function Blog() {
    return (
        <div className="blog_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="blog_taital_main">
                            <h1 className="blog_taital">Book Now Property</h1>
                            <hr className="blog_border_main" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog_section_2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog_text_main">
                                <p className="blog_text">Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `&apos;`Content here, content here`&apos;`, making it look like readable English. Many desktop publishing packages and web</p>
                                <div className="readmore_bt"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog_img"><img src="images/blog-img.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}