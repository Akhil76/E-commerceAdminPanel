import { Typography } from "@mui/material"
import { Outlet,Link } from "react-router-dom"


function AdminDashboard() {
  
  return (
    <div>
      <Typography>AdminDashboard</Typography>
      <Link to="/"><Typography>Home</Typography></Link>
      <Link to="/product"><Typography>Product</Typography></Link>
      <Outlet/>
    </div>
  )
}

export default AdminDashboard
