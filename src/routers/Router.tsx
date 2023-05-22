import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider,
} from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import Login from "../pages/Login";

function Router() { 
 const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<AdminDashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
    </Route>
   
 ))
  return (
    <RouterProvider router={router}/>
  )
}

export default Router
