/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setproductsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productsLoaded) {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          console.log("API Response:", res.data.products);
          setProducts(res.data.products);
          setproductsLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setError("Failed to load products.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [productsLoaded]);

  // const handleEdit = (productId) => {
  //     console.log("Edit product:", productId);
  //     // Add your edit functionality here
  // };

  return (
    <div className="relative min-h-screen p-6 mx-auto">
      <Link
        to="/admin/products/addProducts"
        className="absolute hover:border cursor-pointer text-blue-500 border hover:border-blue-400 bottom-[35px] bg-transparent right-[60px] p-3 text-xl rounded-xl "
      >
        <FaPlus />
      </Link>
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-700">
        Admin Products Page
      </h1>
      {productsLoaded ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-lg">
            <thead className="text-white bg-gradient-to-r from-blue-600 to-blue-800">
              <tr>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Product ID
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Product Name
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Price
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Last Price
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Stock
                </th>
                <th className="px-6 py-3 text-sm font-bold text-left uppercase border">
                  Description
                </th>
                <th className="px-6 py-3 text-sm font-bold text-center uppercase border">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50"
                      : "bg-white hover:bg-gray-100"
                  }
                >
                  <td className="px-6 py-4 text-sm border">
                    {product.productId}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium border">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-green-600 border">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 line-through border">
                    ${product.lastPrice}
                  </td>
                  <td className="px-6 py-4 text-sm border">{product.stock}</td>
                  <td className="px-6 py-4 text-sm border">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 text-center border">
                    <button
                      className="px-2 py-1 mr-2 text-blue-500 rounded-lg focus:outline-none "
                      // onClick={() => handleEdit(product._id)}
                    >
                      <FaEdit className="inline-block w-4 h-4 mr-1" />
                    </button>
                    <button
                      className="px-2 py-1 mr-2 text-red-600 rounded-lg"
                      onClick={() => {
                        const token = localStorage.getItem("token");

                        axios
                          .delete(
                            `http://localhost:5000/api/products/${product.productId}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res.data);
                            toast.success("Product delete successfully");
                            setproductsLoaded(false);
                          });
                      }}
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
        <div className="flex justify-center w-full h-full">
          <div className="w-10 h-10  border-gray-400 border-[4px] rounded-full border-b-blue-500 animate-spin"></div>
        </div>
      )}
    </div>
  );
}
