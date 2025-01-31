import { Carousel } from "flowbite-react";
import myimage from "../assets/images/homepage2.avif";
import myimage2 from "../assets/images/homepage3.jpg"

export default function Home() {
  return (
    <div className="flex flex-wrap w-full px-4 mx-auto lg:px-14 max-w-screen-2xl">
       <Carousel className=" relative h-[400px] w-full gap-y-[10px] top-3">
        <div>
          <img src={myimage} className="object-cover w-full h-full" alt="Slide 1" />
        </div>
        <div>
          <img src={myimage2} className="object-cover w-full h-full" alt="Slide 2" />
        </div>
      </Carousel>

      <div className="flex items-center justify-center gap-[250px]">
        <div>
          <h1 className="my-5 font-sans text-4xl italic leading-[50px] tracking-normal text-left text-[#c4b39f] whitespace-pre-wrap">
            CARE FOR YOUR SKIN,
            <br />
            CARE FOR YOUR BEAUTY
          </h1>
        </div>
        <div>
          <h2 className="my-5 font-sans text-2xl italic leading-[50px] tracking-normal text-left text-[#c4b39f] whitespace-pre-wrap">
            Our skin care clinic best dermatologists in
            <br /> Lahore and Islamabad offer premium aesthetics.
          </h2>
        </div>
      </div>
    </div>
  );
}
