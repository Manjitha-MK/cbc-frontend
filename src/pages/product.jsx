/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Productcard from "../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatatus] = useState("loading"); //loaded , loading , error

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data.products);
          setProducts(res.data.products);
          setLoadingStatatus("loaded");
        })
        .catch((err) => {
          toast.error("Failed to fetch product");
          setLoadingStatatus("error");
          console.log(err);
        });
    }
  }, [loadingStatus]);

  return (
    <div className="relative w-full h-full pt-4">
      <div className="relative flex flex-wrap justify-center w-full h-full pt-4 overflow-y-scroll">
        {products.map((product) => (
          <Productcard product={product} />
        ))}
      </div>
    </div>
  );
}
