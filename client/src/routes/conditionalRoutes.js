import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Home from "../pages/users/01-home"
import AboutUs from "../pages/users/02-aboutUs"
import Services from "../pages/users/03-services"
import ContactUs from "../pages/users/04-contactUs"
import UserNavBar from "../components/user/navigation/useNavBar"
import AdminSignupPage from "../pages/admin/auth/01-adminSignUpPage"
import AdminLoginPage from "../pages/admin/auth/02-adminLoginPage"
import AdminDashboard from "../pages/admin/01-admin-dashboard"
import EditServicesGrid from "../components/admin/dashboard-component/editservicesGrid"
import CreateService from "../components/admin/dashboard-component/createService"

function ConditionalRoute() {

    const{userRole}= useSelector(state => state.user)

    if(userRole === 'admin'){
        return <AdminRoutes/>
    } else{
        return <UserRoutes/>
    }
}

const UserRoutes = () =>{
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


const AdminRoutes = () => {
        return(
            <>
            <Routes>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/edit-services' element={<EditServicesGrid/>}/>
            <Route path='/create-services' element={<CreateService/>}/>
            </Routes>
            </>
        )
}

export default ConditionalRoute