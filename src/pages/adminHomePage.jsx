import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "../Admin/dashboard";
import Products from "../Admin/products";
import AddProductForm from "../Admin/adminProductForm";
import EditProductForm from "../Admin/EditFormPage";
import AdminOrderPage from "../Admin/adminOrderPage";

export default function AdminHomePage() {
  return (
    <div className="flex">
      <div className="w-[20%] h-screen items-center justify-center flex flex-col bg-blue-500">
        <Link to="/admin/dashboard" >Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/products">Products</Link>
      </div>
      <div className="w-[80%] bg-blue-200 h-screen flex ">
        
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/orders" element={<AdminOrderPage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/addProducts" element={<AddProductForm/>}></Route>
            <Route path="/products/editProducts" element={<EditProductForm/>}></Route>
            
        </Routes>

      </div>
    </div>
  );
}
