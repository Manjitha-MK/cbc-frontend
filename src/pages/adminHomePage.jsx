import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "../Admin/dashboard";
import Products from "../Admin/products";

export default function AdminHomePage() {
  return (
    <div className="flex">
      <div className="w-[20%] h-screen items-center flex flex-col bg-blue-400">
        <Link to="/admin/dashboard" >Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/products">Products</Link>
      </div>
      <div className="w-[80%] bg-red-500 h-screen flex ">
        
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/orders" element={<h1>Orders</h1>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>

      </div>
    </div>
  );
}
