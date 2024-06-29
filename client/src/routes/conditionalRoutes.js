import { Routes, Route } from "react-router-dom"
import Home from "../pages/users/01-home"
import AboutUs from "../pages/users/02-aboutUs"
import Services from "../pages/users/03-services"
import ContactUs from "../pages/users/04-contactUs"
import UserNavBar from "../components/user/navigation/useNavBar"
import AdminSignupPage from "../pages/admin/auth/01-adminSignUpPage"
import AdminLoginPage from "../pages/admin/auth/02-adminLoginPage"

function ConditionalRoute() {
    return (
        <>
        <UserNavBar/>
        <Routes>
            <Route path='/admin-signup' element={<AdminSignupPage/>}/>
            <Route path='/admin-login' element={<AdminLoginPage/>}/>

            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        </>
    )
}

export default ConditionalRoute