import { Carousel } from "flowbite-react";
import myimage from "../assets/images/homepage2.avif";
import myimage2 from "../assets/images/homepage4.avif";
import myimage3 from "../assets/images/homepage3.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Productcard from "../components/productCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");

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
          toast.error("Failed to fetch products");
          setLoadingStatus("error");
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="bg-[#fff] ">
      <div className="items-center justify-center w-full h-full px-2 mx-auto overflow-hidden max-w-screen-2xl bg-re">
        <div className="pt-6 m-4 text-4xl text-center lg:hidden text-accent">
          <h1>
            MK Company <br /> Pvt Lmt
          </h1>
        </div>
        <Carousel className="w-full -top-7 h-[400px] lg:px-6 lg:h-[600px] lg:mt-10 ">
          <div>
            <img
              src={myimage}
              className="object-cover w-full lg:h-[700px]"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src={myimage2}
              className="object-cover w-full lg:h-[700px]"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src={myimage3}
              className="object-cover w-full lg:h-[700px]"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col relative w-full bottom-4 h-[35vh] lg:mb-1 items-center justify-center lg:flex-row lg:gap-y-[150px] gap-x-[200px]">
        <div className="">
          <h1 className="font-sans text-4xl italic leading-[50px] tracking-normal text-center text-[#c4b39f] whitespace-pre-wrap">
            CARE FOR YOUR SKIN,
            <br />
            CARE FOR YOUR BEAUTY
          </h1>
        </div>
        <div className="">
          <h2 className="text-center font-sans text-2xl italic leading-[50px] tracking-normal text-[#c4b39f] whitespace-pre-wrap">
            Our skin care clinic best dermatologists in
            <br /> Lahore and Islamabad offer premium aesthetics.
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-0 py-[30px] px-4 mx-auto bg-accent-light lg:px-7 max-w-screen-2xl">
        <div className="pb-3 mx-auto text-center md:w-1/2">
          <h1 className="text-4xl mb-4 font-semibold text-[#4D4D4D]">
            OUR LATEST PRODUCTS
          </h1>
        </div>
        {loadingStatus == "loaded" && (
          <div className="grid w-full  border-[2px] border-black h-[500px] grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-y-scroll">
            {products.map((product) => {
              return <Productcard product={product} />;
            })}
          </div>
        )}
        {loadingStatus == "loading" && (
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 border-2 border-b-4 border-gray-500 rounded-full animate-spin border-b-accent"></div>
          </div>
        )}
      </div>
    </div>
  );
}
