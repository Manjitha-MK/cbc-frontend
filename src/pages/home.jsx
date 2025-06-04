import { Carousel } from "flowbite-react";
import myimage from "../assets/images/homepage2.avif";
import myimage2 from "../assets/images/homepage4.avif";
import myimage3 from "../assets/images/homepage3.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Productcard from "../components/productCard";

import banner from "../assets/images/banner image.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          setProducts(res.data.products);
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          toast.error("Failed to fetch products");
          setLoadingStatus("error");
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* ✅ Banner Image Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] w-full mx-auto max-w-screen-2xl">
        <img
          src={banner}
          alt="Banner"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-center text-orange-200 bg-black bg-opacity-30">
          CRISTAL BEAUTY <br /> CLEAR
        </div>
      </div>

      {/* ✅ Carousel Section */}
      <div>
        <Carousel className="w-full h-auto min-h-[50vh] md:min-h-[40vh] mx-auto bg-pink-50">
          {[myimage, myimage2, myimage3].map((img, index) => (
            <div
              key={index}
              className="relative flex flex-col-reverse items-center justify-between gap-6 py-10 lg:flex-row-reverse lg:gap-12 lg:py-16"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={img}
                  className="object-cover w-full h-full rounded-lg"
                  alt={`Slide ${index + 1}`}
                />
              </div>

              {/* Text */}
              <div className="px-4 text-center lg:text-left lg:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#be843d] mb-4">
                  CARE FOR YOUR SKIN,
                  <br />
                  CARE FOR <span className="text-accent">YOUR BEAUTY</span>
                </h1>
                <p className="text-base text-gray-700">
                  Our skin care clinic best dermatologists in
                  <br />
                  Colombo and Kandy offer premium aesthetics.
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* ✅ Product Section */}
      <div className="w-full px-4 py-12 mx-auto max-w-screen-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            OUR LATEST PRODUCTS
          </h2>
          <p className="mt-2 text-sm text-accent md:text-base">
            Discover our best-selling and newly added products.
          </p>
        </div>

        {loadingStatus === "loaded" ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Productcard key={product._id} product={product} />
            ))}
          </div>
        ) : loadingStatus === "loading" ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-14 h-14 border-4 border-t-4 border-gray-300 border-t-[#be843d] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="font-medium text-center text-red-600">
            Failed to load products. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
}
