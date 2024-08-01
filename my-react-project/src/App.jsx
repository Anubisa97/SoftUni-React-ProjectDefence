import { Route, Routes } from "react-router-dom";

import Blog from "./components/blog/Blog"
import ContactUs from "./components/contact-us/ContactUs"
import Feature from "./components/feature/feature"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import Newsletter from "./components/newsletter/Newsletter"
import PropertiesList from "./components/properties-list/PropertiesList"
import Reviews from "./components/reviews/Reviews"
import SelectBox from "./components/select-box/SelectBox"
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";


function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<PropertiesList />} />
          <Route path='/about' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
