/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

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

    return (
        <div className="container relative p-6 mx-auto">
            <h1 className="mb-8 text-3xl font-semibold text-center text-blue-600">Admin Products Page</h1>
            {loading ? (
                <div className="text-xl text-center text-gray-500">Loading...</div>
            ) : error ? (
                <div className="text-xl text-center text-red-500">{error}</div>
            ) : products.length > 0 ? (
                <div className="absolute grid grid-cols-1 gap-6 left-7 right-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="p-6 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
                        >
                            <img
                                src={product.images[0]}
                                alt={product.productName}
                                className="object-cover w-full h-48 mb-4 rounded-lg"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">{product.productName}</h2>
                            <p className="my-2 text-sm text-gray-500">{product.description}</p>
                            <div className="font-bold text-gray-800 ">
                                <p>Price: ${product.price}</p>
                                <p className="text-gray-500 line-through">Last Price: ${product.lastPrice}</p>
                                <p>Stock: {product.stock}</p>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-xl text-center text-gray-500">No products available.</p>
            )}
        </div>
    );
}
