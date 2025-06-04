// At the top of the file
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import banner from "../assets/images/aboutbanner.jpg";
import team1 from "../assets/images/homepage2.avif";
import team2 from "../assets/images/homepage3.jpg";
import team3 from "../assets/images/homepage4.avif";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* ✅ Banner Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] w-full mx-auto max-w-screen-2xl">
        <img
          src={banner}
          alt="About Us Banner"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-4xl font-bold text-center text-orange-200 bg-black bg-opacity-30">
          <div className="max-w-3xl p-10 shadow-lg bg-gradient-to-r from-black/10 via-black/20 to-black/30 rounded-2xl backdrop-blur-sm">
            <p className="text-xl font-semibold leading-relaxed tracking-wide text-orange-300 md:text-3xl drop-shadow-lg">
              With a passion for premium skincare,{" "}
              <span className="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-300">
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded-full"></span>
                CRISTAL BEAUTY
              </span>{" "}
              provides high-end treatments and products designed to rejuvenate
              and enhance your natural beauty — because you deserve nothing
              less.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ About Text Section */}
      <div className="w-full px-4 py-12 mx-auto text-center max-w-screen-2xl">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          WHO WE ARE
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-base text-gray-700">
          At Cristal Beauty, we believe true beauty comes from confidence and
          care. Our expert dermatologists and beauty consultants provide
          personalized skincare solutions using premium products and proven
          methods. With branches in Colombo and Kandy, we aim to make glowing,
          healthy skin accessible to everyone.
        </p>
      </div>

      {/* ✅ Mission & Vision Section */}
      <div className="w-full px-4 py-12 mx-auto bg-pink-50 max-w-screen-2xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#be843d] mb-2">
              OUR MISSION
            </h3>
            <p className="text-gray-700">
              To enhance the natural beauty of our clients through innovative
              skincare treatments, quality products, and professional expertise.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#be843d] mb-2">
              OUR VISION
            </h3>
            <p className="text-gray-700">
              To be the most trusted skincare brand in Sri Lanka, known for our
              integrity, effectiveness, and commitment to beauty and wellness.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Swiper Carousel Team Section */}
      <div className="w-full px-4 py-12 mx-auto max-w-screen-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          MEET OUR TEAM
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg shadow">
              <img
                src={team1}
                alt="Dr. Nadeesha Perera"
                className="object-cover w-40 h-40 rounded-full"
              />
              <h4 className="text-lg font-semibold text-[#be843d]">
                Dr. Nadeesha Perera
              </h4>
              <p className="max-w-md text-sm text-center text-gray-600">
                With over 10 years of experience in clinical dermatology, Dr.
                Nadeesha leads our skincare treatments with a perfect blend of
                science and compassion. She ensures every client receives a
                customized and effective solution for their skin concerns.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg shadow">
              <img
                src={team2}
                alt="Shanali Fernando"
                className="object-cover w-40 h-40 rounded-full"
              />
              <h4 className="text-lg font-semibold text-[#be843d]">
                Shanali Fernando
              </h4>
              <p className="max-w-md text-sm text-center text-gray-600">
                Shanali specializes in beauty consultations and product
                recommendations. Her passion for skincare and deep product
                knowledge ensures our clients feel confident and cared for with
                the right regimen.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-4 py-10 bg-white rounded-lg shadow">
              <img
                src={team3}
                alt="Kalum Jayasuriya"
                className="object-cover w-40 h-40 rounded-full"
              />
              <h4 className="text-lg font-semibold text-[#be843d]">
                Kalum Jayasuriya
              </h4>
              <p className="max-w-md text-sm text-center text-gray-600">
                Kalum manages our clinic operations across Colombo and Kandy.
                His dedication to customer experience and quality assurance
                keeps Cristal Beauty running smoothly and professionally every
                day.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
