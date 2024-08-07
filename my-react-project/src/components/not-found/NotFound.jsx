import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="blog_section">
            <div className="container-fluid">
                <div className="row" style={{ flexDirection: "column", alignItems: "center" }} >
                    <div className="blog_img"><img src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png" /></div>
                    <div className="readmore_bt"><Link to="/">Go Home</Link></div>
                </div>
            </div>
        </div >
    );
}