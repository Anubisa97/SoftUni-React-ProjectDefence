import Blog from "./components/blog/Blog"
import ContactUs from "./components/contact-us/ContactUs"
import Feature from "./components/feature/feature"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import Newsletter from "./components/newsletter/Newsletter"
import PropertiesList from "./components/properties-list/PropertiesList"
import Reviews from "./components/reviews/Reviews"
import SelectBox from "./components/select-box/SelectBox"


function App() {
  return (
    <>
      <div>

        <Header />
        <SelectBox />
        <Feature />
        <PropertiesList />
        <Blog />
        <Newsletter />
        <Reviews />
        <ContactUs />
        <Footer />




      </div>
    </>
  )
}

export default App
