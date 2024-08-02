
// import Blog from "../blog/Blog";
// import ContactUs from "../contact-us/ContactUs";
// import Feature from "../feature/feature";
// import Newsletter from "../newsletter/Newsletter";
// import Reviews from "../reviews/Reviews";
import PropertiesList from "../properties-list/PropertiesList";
import SelectBox from "../select-box/SelectBox";

export default function Home() {
    return (
        <div>
            <SelectBox />
            {/* <Feature /> */}
            <PropertiesList />
            {/* <Blog />
            <Newsletter />
            <Reviews />
            <ContactUs /> */}
        </div>
    );
}