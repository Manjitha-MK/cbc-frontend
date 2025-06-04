import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Productcard from "../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [query, setQuery] = useState("");

  const fetchProducts = (url) => {
    setLoadingStatus("loading");
    axios
      .get(url)
      .then((res) => {
        const result = res.data.products || res.data; // fallback for search response
        setProducts(result);
        setLoadingStatus("loaded");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error loading products");
        setLoadingStatus("error");
      });
  };

  useEffect(() => {
    fetchProducts(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
  }, []);

  const search = (e) => {
    const value = e.target.value;
    setQuery(value);

    const url = value
      ? `${import.meta.env.VITE_BACKEND_URL}/api/products/search/${value}`
      : `${import.meta.env.VITE_BACKEND_URL}/api/products`;

    fetchProducts(url);
  };

  return (
    <div className="w-full min-h-screen px-4 py-6 bg-gray-100">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={search}
          value={query}
        />
      </div>

      {/* Loading Spinner */}
      {loadingStatus === "loading" && (
        <div className="flex items-center justify-center w-full h-64">
          <div className="w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}

      {/* Product Grid */}
      {loadingStatus === "loaded" && products.length > 0 && (
        <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Productcard key={product._id || product.productId} product={product} />
          ))}
        </div>
      )}

      {/* No Results */}
      {loadingStatus === "loaded" && products.length === 0 && (
        <div className="text-center text-gray-600">No products found.</div>
      )}

      {/* Error Message */}
      {loadingStatus === "error" && (
        <div className="font-semibold text-center text-red-500">
          Failed to load products. Please try again later.
        </div>
      )}
    </div>
  );
}
