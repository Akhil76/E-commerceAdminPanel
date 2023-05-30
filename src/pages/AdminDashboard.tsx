import React from'react';
import { Box, Typography, CssBaseline, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

// interface Props{
  
//   onClick: () => void;
//   setOpen:boolean;
//   open:boolean
// }

const drawerWidth = 240;


function AdminDashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
      
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header 
        sidbarIsOpened={open} 
        open={false} 
        onClick={handleDrawerOpen}
        />
      <Sidebar 
      open={open}
      onClose={handleDrawerClose}
      />
      
      <Box
        component="main"
        sx={{ flexGrow:1, p:3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar/>
        <Outlet />
      </Box>
      {/* <div>
        <Toolbar/>
        <Outlet />
      </div> */}
    </Box>
  )
}

export default AdminDashboard
