import React from "react";
import carouselData from "../data/carousel-data.json";

//swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


const MobileCarousel = () => {

  //linkedIn Profile
  const openLinkedInProfile = () => {
    const linkedInProfileUrl = "https://shorturl.at/qKY69";
    window.open(linkedInProfileUrl, "_blank");
  };

  return (
    <div className="px-4 py-6 bg-white md:hidden ">
      <h1 className="text-xl font-semibold">
        What financial goal do you want to plan today?
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Select a goal to start planning
      </p>
      <div className="mt-6">
        <Swiper spaceBetween={15} slidesPerView={2.3} slidesPerGroupSkip={2}>
          {carouselData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-[144px] h-40 rounded-2xl p-4 	 border-periwinkle-gray border-2"
              onClick={openLinkedInProfile}
            >
              <img src={item.icon} alt={item.title} />

              <h1 className="pt-2 text-lg font-semibold">{item.title}</h1>
              <h1 className="text-xs text-gray-500"> {item.text}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileCarousel;
