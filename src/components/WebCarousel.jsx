import React, { useState } from "react";
import CustomNavLeft from "./custom-nav/CustomNavLeft";
import CustomNavRight from "./custom-nav/CustomNavRight";
import carouselData from "../data/carousel-data.json";
import notes from "../assets/note-stack.png";

//swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";


const WebCarousel = () => {
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [showRightNav, setShowRightNav] = useState(true);


  //Linkedin profile
  const openLinkedInProfile = () => {
    const linkedInProfileUrl = "https://shorturl.at/qKY69";

    window.open(linkedInProfileUrl, "_blank");
  };

  const handleSlideChange = (swiper) => {
    setShowLeftNav(swiper.activeIndex !== 0);
    setShowRightNav(!swiper.isEnd);
  };
  
  return (
    <div className="hidden pt-8 pl-8 mb-8 bg-white border rounded-3xl md:flex">
      <div className="flex flex-col justify-center w-1/5 ">
        <h1 className="font-semibold lg:text-xl">
          What financial goal do you want to plan today?
        </h1>
        <p className="py-2 text-sm text-gray-500">
          Select a goal to start planning
        </p>
        <img src={notes} alt="note stack" className="h-20 w-28" />
      </div>

      <div className="w-4/5 mx-auto">
        <Swiper
          className="relative w-full overflow-hidden"
          breakpoints={{
            768: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 3.3,
            },

            1280: {
              slidesPerView: 6.3,
            },
          }}
          spaceBetween={15}
          slidesPerGroup={2}
          onSlideChange={handleSlideChange}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard]}
        >
          {carouselData.map((item) => (
            <div key={item.id}>
              <CustomNavLeft className="absolute" />
              <SwiperSlide
                onClick={openLinkedInProfile}
                key={item.id}
                className="h-40 p-3 cursor-pointer hover:border-2 rounded-2xl hover:border-periwinkle-gray focus:outline-none hover:shadow-lg "
              >
                <img src={item.icon} alt={item.title} />

                <h1 className="pt-2 text-sm font-semibold lg:text-base">
                  {item.title}
                </h1>
                <h1 className="text-xs text-gray-500 lg:text-sm">
                  {" "}
                  {item.text}
                </h1>
              </SwiperSlide>
            </div>
          ))}
          {showLeftNav && <CustomNavLeft />}
          {showRightNav && <CustomNavRight />}
        </Swiper>
      </div>
    </div>
  );
};

export default WebCarousel;
