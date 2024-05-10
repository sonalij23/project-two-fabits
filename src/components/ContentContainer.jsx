import React from "react";
import PlanCard from "../components/PlanCard";
import SearchInput from "../components/SearchInput";
import { IoIosInformationCircle } from "react-icons/io";
import WebCarousel from "./WebCarousel";
import MobileCarousel from "../components/MobileCarousel";

const ContentContainer = () => {
  return (
    <div className="w-full md:p-8">

       {/*Carouselcomponent */}
      <div>
        <WebCarousel />
        <MobileCarousel />
      </div>
      <div className="bg-white border md:px-6 md:rounded-3xl">
        <SearchInput />

        {/*Mobile view info component */}
        <div className="px-4 py-3 text-center text-gray-500 border-gray-300 border-y bg-selago md:hidden">
          <div className="flex items-center justify-center gap-2">
            <IoIosInformationCircle />
            <p className="text-xs">Tap on a card to view more information</p>
          </div>
        </div>

        {/* card component */}

        <PlanCard />
      </div>
    </div>
  );
};

export default ContentContainer;
