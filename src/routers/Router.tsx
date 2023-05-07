import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider,
} from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import RootLayout from "../pages/RootLayout";


function Router() { 
 const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<AdminDashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
    </Route>
   
 ))
  return (
    <RouterProvider router={router}/>
  )
}

export default Router
