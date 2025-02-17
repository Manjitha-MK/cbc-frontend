/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Productcard from "../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading"); //loaded , loading , error
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data.products);
          setProducts(res.data.products);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          toast.error("Failed to fetch product");
          setLoadingStatus("error");
          console.log(err);
        });
    }
  }, []);

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setLoadingStatus("loading");
    if (query == "") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error loading products");
        });
    } else {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/" + query)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          console.log(err + "sdsdsd");
          toast.error("Error loading products");
        });
    }
  }

  return (
    <div className="relative w-full h-full pt-4">
      <div className="absolute flex justify-center w-full">
        <input
          type="text"
          placeholder="Search products"
          className="absolute z-50 w-1/2 p-2"
          onChange={search}
          value={query}
        />
      </div>
      {loadingStatus == "loaded" && (
        <div className="relative flex flex-wrap justify-center w-full h-full pt-4 overflow-y-scroll">
          {products.map((product) => (
            <Productcard product={product} />
          ))}
        </div>
      )}
      {loadingStatus == "loading" && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-32 h-32 border-2 border-b-4 border-gray-500 rounded-full animate-spin border-b-accent"></div>
        </div>
      )}
    </div>
  );
}
