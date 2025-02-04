import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../components/imageSlider";
import { addToCart } from "../Utils/cartFunction";
import toast from "react-hot-toast";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(productId);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((res) => {
        console.log(res.data);

        if (res.data == null) {
          setStatus("not-found");
        }

        if (res.data != null) {
          setProduct(res.data);
          setStatus("found");
        }
      });
  }, []);

  function onAddToCartClick(){
    addToCart(product.productId)
    toast.success(product.productId+" Add to Cart")
  }

  function onBuyNow(){
    navigate("/shipping",{
      state : {
        items : [
          {
            productId: product.productId,
            qty: 1
          }

        ]
      }
    })
  }

  return (
    <div className="w-full h-[calc(100vh-100px)] bg-white ">
      {status == "loading" && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-500 border-b-[#b88c44] border-b-4"></div>
        </div>
      )}
      {status == "not-found" && <ProductNotFound />}
      {status == "found" && (
        <div className="flex flex-col items-center justify-center w-full h-full md:flex-row lg:flex-row ">
          <h1 className="text-3xl font-bold text-gray-800 lg:hidden md:hidden">{product.productName}</h1>
          <p className="text-xl text-gray-600 lg:hidden">
              {product.price > product.lastPrice && (
                <span className="text-red-600 line-through">
                  LKR.{product.price}
                </span>
              )}
              <span>{"LKR" + product.lastPrice}</span>
            </p>
          <div className="w-[100%] lg:h-full lg:w-[35%] border-[3px] bg-red-700">
            {/* <ImageSlider images={product.images}/> */}
            <h1>askas jskdjld</h1>
            <h1>sdjisdjisjd</h1>
          </div>

          <div className="h-full p-4 lg:w-[65%]">
            <h1 className="hidden text-3xl font-bold text-gray-800 lg:block md:block">
              {product.productName}
            </h1>
            <h1 className="text-3xl font-bold text-gray-500">
              {product.altNames.join(" ")}
            </h1>
            <p className="hidden text-xl text-gray-600 lg:block">
              {product.price > product.lastPrice && (
                <span className="text-red-600 line-through">
                  LKR.{product.price}
                </span>
              )}
              <span>{"LKR" + product.lastPrice}</span>
            </p>
            <p className="text-lg text-gray-600 line-clamp-3">
              {product.description}
            </p>
            <button onClick={onAddToCartClick} className="p-2 text-white rounded-lg bg-accent">Add to cart</button>
            <button onClick={onBuyNow} className="p-2 mx-2 border rounded-lg text-accent border-1 border-accent"> Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}