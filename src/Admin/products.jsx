/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then((res) => {
                console.log("API Response:", res.data);
                if (res.data && Array.isArray(res.data.products)) {
                    setProducts(res.data.products); // Update state with the products array
                } else {
                    console.error("Unexpected response format:", res.data);
                    setError("Unexpected data format from server.");
                }
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setError("Failed to load products.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // const handleEdit = (productId) => {
    //     console.log("Edit product:", productId);
    //     // Add your edit functionality here
    // };

    // const handleDelete = (productId) => {
    //     console.log("Delete product:", productId);
    //     // Add your delete functionality here
    // };

    return (
        <div className="container relative p-6 mx-auto">
            <Link to="/admin/products/addProducts" className="absolute hover:border cursor-pointer text-blue-500 border hover:border-blue-400 bottom-[35px] bg-transparent right-[60px] p-3 text-xl rounded-xl "><FaPlus/></Link>
            <h1 className="mb-8 text-4xl font-bold text-center text-blue-700">Admin Products Page</h1>
            {loading ? (
                <div className="text-xl text-center text-gray-500">Loading...</div>
            ) : error ? (
                <div className="text-xl text-center text-red-500">{error}</div>
            ) : products.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-lg">
                        <thead className="text-white bg-gradient-to-r from-blue-600 to-blue-800">
                            <tr>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Product ID</th>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Product Name</th>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Price</th>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Last Price</th>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Stock</th>
                                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">Description</th>
                                <th className="px-6 py-3 text-sm font-bold text-center uppercase border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr
                                    key={product._id}
                                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white hover:bg-gray-100"}
                                >
                                    <td className="px-6 py-4 text-sm border">{product.productId}</td>
                                    <td className="px-6 py-4 text-sm font-medium border">{product.productName}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-green-600 border">${product.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 line-through border">${product.lastPrice}</td>
                                    <td className="px-6 py-4 text-sm border">{product.stock}</td>
                                    <td className="px-6 py-4 text-sm border">{product.description}</td>
                                    <td className="px-6 py-4 text-center border">
                                        <button
                                            className="px-2 py-1 mr-2 text-blue-500 rounded-lg focus:outline-none "
                                            // onClick={() => handleEdit(product._id)}
                                        >
                                            <FaEdit className="inline-block w-4 h-4 mr-1" />
                                            
                                        </button>
                                        <button
                                            className="px-2 py-1 mr-2 text-red-600 rounded-lg"
                                            // onClick={() => handleDelete(product._id)}
                                        >
                                            <FaTrash className="inline-block w-4 h-4 mr-1" />
                                            
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-xl text-center text-gray-500">No products available.</p>
            )}
        </div>
    );
}
