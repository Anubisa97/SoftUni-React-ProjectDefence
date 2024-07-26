export default function Newsletter() {
    return (
        <div className="newsletter_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="newsletter_taital_main">
                            <h1 className="newsletter_taital">subscribe Our newsletter</h1>
                            <hr className="newsletter_border_main" />
                        </div>
                    </div>
                </div>
                <form action="">
                    <textarea className="email_bt" placeholder="Enter Your Email" rows="5" id="comment" name="Massage"></textarea>
                    <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                </form>
            </div>
        </div>
    );
}