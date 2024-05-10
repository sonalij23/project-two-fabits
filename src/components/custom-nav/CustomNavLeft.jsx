import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft } from "react-icons/fi";


const CustomNavLeft = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute left-0 lg:top-[30%]  top-[40%] z-50 text-xl lg:text-3xl ">
      <button onClick={() => swiper.slidePrev()} className="p-2 rounded-full bg-alto">
      <FiChevronLeft/>
      </button>
    </div>
  );
};

export default CustomNavLeft;
