import { Route, Routes } from "react-router-dom";

import Blog from "./components/blog/Blog"
import ContactUs from "./components/contact-us/ContactUs"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import PropertiesList from "./components/properties-list/PropertiesList"
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import PropertyDetails from "./components/properties-list/property-details/PropertyDetails";
import Create from "./components/create/Create";
import { AuthContextProvider } from "./contexts/AuthContext";
import MyProperties from "./components/my-properties/MyProperties";
import EditProperty from "./components/edit-property/EditProperty";
import RouterGuard from "./components/common/RouterGuard";
import NotFound from "./components/not-found/NotFound";
import SavedProperties from "./components/saved-properties/SavedProperties";
import SaveProperties from "./components/save-properties/SaveProperties";


function App() {


  return (
    <AuthContextProvider>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<PropertiesList />} />
          <Route path='/properties/details/:propertyId' element={<PropertyDetails />} />
          <Route path='/about' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route element={<RouterGuard />}>
            <Route path='/create' element={<Create />} />
            <Route path='/properties/details/:propertyId/edit' element={<EditProperty />} />
            <Route path='/my-properties' element={<MyProperties />} />
            <Route path='/saved-properties' element={<SavedProperties />} />
            <Route path='/save' element={<SaveProperties />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </AuthContextProvider>
  )
}

export default App
