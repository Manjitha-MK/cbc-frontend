import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../Utils/mediaUpload";

export default function EditProductForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state.product;
  if (product == null) {
    navigate("/admin/products");
  }

  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");

    const promisesArray = [];

    for (let i = 0; i < imageFiles.length; i++) {
      promisesArray[i] = uploadMediaToSupabase(imageFiles[i]);
    }

    const imgUrls = await Promise.all(promisesArray);

    const product = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      stock: stock,
      description: description,
    };
    const token = localStorage.getItem("token");

    try {
      const response = axios.post(
        "http://localhost:5000/api/products",
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Check if the response indicates success
      if (response.status === 201 || response.status === 200) {
        toast.success("Product added successfully");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      // Handle the error and display a meaningful message
      if (err.response && err.response.data && err.response.data.message) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(err);
    }
    navigate("/admin/products");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="w-full max-w-3xl p-10 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-700">
          Edit Product
        </h1>
        <div className="space-y-8">
          {/* Row 1: Product ID and Name */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Product ID
              </label>
              <input
                type="text"
                placeholder="Enter Product ID"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          {/* Row 2: Alternative Names and Image URL */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Alternative Names
              </label>
              <input
                type="text"
                placeholder="Enter Alternative Names"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={alternativeNames}
                onChange={(e) => setAlternativeNames(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Image URL
              </label>
              <input
                type="file"
                placeholder="Enter Image URL"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => {
                  setImageFiles(e.target.files);
                }}
                multiple
              />
            </div>
          </div>
          {/* Row 3: Price and Last Price */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Last Price
              </label>
              <input
                type="number"
                placeholder="Enter Last Price"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={lastPrice}
                onChange={(e) => setLastPrice(e.target.value)}
              />
            </div>
          </div>
          {/* Row 4: Stock and Description */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Stock
              </label>
              <input
                type="number"
                placeholder="Enter Stock"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Enter Description"
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 font-medium text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
