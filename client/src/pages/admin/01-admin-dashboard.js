import React from 'react'
import EditServicesGrid from '../../components/admin/dashboard-component/editservicesGrid'
import CreateService from '../../components/admin/dashboard-component/createService'
import { useNavigate, navigate } from 'react-router-dom'


function AdminDashboard(){
    const navigate = useNavigate();
    return(
        <>
        <div class="options">
            <button onClick={()=>navigate("/edit-services")}>Edit Services</button>
            <button onClick={()=>navigate("/create-services")}>Create Service</button>
        </div>
            {/* <EditServicesGrid/>
            <CreateService/> */}
        </>
    )
}

export default AdminDashboard