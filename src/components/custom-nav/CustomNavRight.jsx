import React from "react";

import { useSwiper } from "swiper/react";
import { FiChevronRight } from "react-icons/fi";

const CustomNavRight = () => {
  const swiper = useSwiper();
 

  return (
    <div className="absolute right-8 lg:top-[30%]  top-[40%] z-50 text-xl lg:text-3xl  ">
      <button onClick={() => swiper.slideNext()} className="p-2 rounded-full bg-alto">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CustomNavRight;
