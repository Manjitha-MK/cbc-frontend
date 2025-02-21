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
    <div className="bg-[#d5e3f1] w-full min-h-screen">
      <div className="relative min-h-[80vh] md:min-h-[60vh] lg:min-h-[70vh] py-4 px-4 mx-auto max-w-screen-2xl bg-red-70">
        <div className="pt-1 pb-3 bg-seconday m-1 text-4xl text-center lg:hidden text-[#be843d]">
          <h1>
            MK COMPANY <br /> pvt lmt
          </h1>
        </div>
        <Carousel className="w-full bg-blue-70 h-auto min-h-[50vh] md:min-h-[40vh] mx-auto">
          <div className="relative flex flex-col items-center justify-between gap-12 py-10 bg-green-60 lg:h-full lg:p-0 lg:my-8 md:flex-row-reverse lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2 md:w-1/2">
              <img
                src={myimage}
                className="object-cover w-full h-full "
                alt="Slide 1"
              />
            </div>
            <div className="p-1 m-3 text-center bg-red-80 lg:left-1/4 lg:absolute lg:-translate-x-1/2 bg-secondar">
              <h1 className="mb-4 text-4xl font-semibold leading-snug text-secondary lg:w-3/4 md:w-3/4">
                CARE FOR YOUR SKIN,
                <br />
                CARE FOR{" "}
                <span className="leading-snug text-accent">YOUR BEAUTY</span>
              </h1>

              <p className="mb-8 text-base lg:w-3/4 md:w-3/4">
                Our skin care clinic best dermatologists in
                <br /> Colombo and Kandy offer premium aesthetics.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-between gap-12 py-10 bg-green-60 lg:h-full lg:p-0 lg:my-8 md:flex-row-reverse lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2 md:w-1/2">
              <img
                src={myimage2}
                className="object-cover w-full h-full "
                alt="Slide 2"
              />
            </div>
            <div className="p-1 m-3 text-center bg-red-80 lg:left-1/4 lg:absolute lg:-translate-x-1/2 bg-secondar">
              <h1 className="mb-4 text-4xl font-semibold leading-snug text-secondary lg:w-3/4 md:w-3/4">
                CARE FOR YOUR SKIN,
                <br />
                CARE FOR{" "}
                <span className="leading-snug text-accent">YOUR BEAUTY</span>
              </h1>

              <p className="mb-8 text-base lg:w-3/4 md:w-3/4">
                Our skin care clinic best dermatologists in
                <br /> Colombo and Kandy offer premium aesthetics.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-between gap-12 py-10 bg-green-60 lg:h-full lg:p-0 lg:my-8 md:flex-row-reverse lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2 md:w-1/2">
              <img
                src={myimage3}
                className="object-cover w-full h-full "
                alt="Slide 3"
              />
            </div>
            <div className="p-1 m-3 text-center bg-red-80 lg:left-1/4 lg:absolute lg:-translate-x-1/2 bg-secondar">
              <h1 className="mb-4 text-4xl font-semibold leading-snug text-secondary lg:w-3/4 md:w-3/4">
                CARE FOR YOUR SKIN,
                <br />
                CARE FOR{" "}
                <span className="leading-snug text-accent">YOUR BEAUTY</span>
              </h1>

              <p className="mb-8 text-base lg:w-3/4 md:w-3/4">
                Our skin care clinic best dermatologists in
                <br /> Colombo and Kandy offer premium aesthetics.
              </p>
            </div>
          </div>
          {/* <div className="relative  flex flex-col items-center bg-blue-60 lg:h-full justify-between gap-12 lg:p-0 py-1 lg:top-[200px] md:top-[200px] top-[300px] lg:my-8 md:flex-row-reverse lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2 md:w-1/2">
              <img
                src={myimage2}
                className="object-cover w-full h-full "
                alt="Slide 2"
              />
            </div>
            <div className="p-1 m-3 text-center left-[130px] lg:absolute bg-seconda">
              <h1 className="mb-4 text-4xl font-semibold leading-snug text-secondary lg:w-3/4 md:w-3/4">
                CARE FOR YOUR SKIN,
                <br />
                CARE FOR{" "}
                <span className="leading-snug text-accent">YOUR BEAUTY</span>
              </h1>

              <p className="mb-8 text-base lg:w-3/4 md:w-3/4">
                Our skin care clinic best dermatologists in
                <br /> Colombo and Kandy offer premium aesthetics.
              </p>
            </div>
          </div>
          <div className="relative  flex flex-col items-center  md:top-[250px] bg-blue-60 lg:h-full justify-between gap-12 lg:p-0 py-1 lg:top-[200px] top-[300px] lg:my-8 md:flex-row-reverse lg:flex-row-reverse">
            <div className="w-full h-full lg:w-1/2 md:w-1/2">
              <img
                src={myimage3}
                className="object-cover w-full h-full "
                alt="Slide 3"
              />
            </div>
            <div className="p-1 m-3 text-center left-[130px] lg:absolute bg-seconda">
              <h1 className="mb-4 text-4xl font-semibold leading-snug text-secondary lg:w-3/4 md:w-3/4">
                CARE FOR YOUR SKIN,
                <br />
                CARE FOR{" "}
                <span className="leading-snug text-accent">YOUR BEAUTY</span>
              </h1>

              <p className="mb-8 text-base lg:w-3/4 md:w-3/4">
                Our skin care clinic best dermatologists in
                <br /> Colombo and Kandy offer premium aesthetics.
              </p>
            </div>
          </div> */}
        </Carousel>
      </div>

      <div className="flex flex-wrap w-full gap-4 px-4 py-8 mx-auto bg-accent-light lg:px-7 max-w-screen-2xl">
        <div className="pb-3 mx-auto text-center md:w-1/2">
          <h1 className="text-4xl mb-4 font-semibold text-[#4D4D4D]">
            OUR LATEST PRODUCTS
          </h1>
        </div>
        {loadingStatus == "loaded" && (
          <div className="grid w-full bg-red-800 border-[2px] border-black min-h-[500px] h-auto grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center rounded-xl">
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