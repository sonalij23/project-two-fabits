import React from "react";
import { Card } from "flowbite-react";
import planData from "../data/plan-data.json";

// Icons
import { FaHeartCircleCheck, FaHeartCircleMinus } from "react-icons/fa6";
import { IoBulb } from "react-icons/io5";
import { MdHeartBroken } from "react-icons/md";
import { MdBolt } from "react-icons/md";

const PlanCard = () => {
  
  //Get LinkedIn Profile
  const openLinkedInProfile = () => {
    const linkedInProfileUrl = "https://shorturl.at/qKY69";

    window.open(linkedInProfileUrl, "_blank");
  };

  const getHealthInfo = (health) => {
    switch (health) {
      case "Excellent!":
        return { icon: <FaHeartCircleCheck />, color: "text-hippie-green" };
      case "Good":
        return { icon: <FaHeartCircleCheck />, color: "text-asparagus" };
      case "Weak":
        return { icon: <FaHeartCircleMinus />, color: "text-dixie" };
      case "Poor":
        return { icon: <MdHeartBroken />, color: "text-red-500" };
      default:
        return { icon: "", color: "" };
    }
  };


//Boost Plan
  const renderBoostSection = (item, color) => {
    if (item.boost) {
      return (
        <div className="flex flex-col ">
          <div className={` font-semibold justify-center py-4 ${color}`}>
            <span className="flex items-center justify-center gap-2 p-1 rounded-md bg-old-lace ">
              <IoBulb className="text-lg" />
              <p className="text-sm ">Boost to reach your goal sooner!</p>
            </span>
          </div>
          <button className="flex items-center justify-center w-full gap-2 p-2 border rounded-lg hover:bg-east-bay hover:text-white text-east-bay">
            <MdBolt className="text-xl " />
            <p>Boost</p>
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-8 bg-white md:grid-cols-2 xl:grid-cols-3 md:px-0 ">
      {planData.map((item) => {
        const { icon, color } = getHealthInfo(item.health);

        return (
          <Card
            className="rounded-[20px] drop-shadow-none border-gray-300 cursor-pointer  card"
            key={item.id}
            onClick={openLinkedInProfile}
          >
            <div className="h-full ">
              <div className="flex gap-4 pb-2">
                <img
                  className="object-cover w-14 h-14"
                  src={item.icon}
                  alt="vacation"
                />
                <h1 className="text-base font-semibold lg:text-lg">
                  {item.text}
                </h1>
              </div>
              <div className="flex justify-between py-6 border-y">
                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="text-gray-500 md:text-[10px] lg:text-sm">
                      Goal Progress
                    </h5>
                    <span className="font-semibold md:text-xs lg:text-sm ">
                      {item.progress}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-500 md:text-[10px] lg:text-sm">
                      Goal Date
                    </h5>
                    <span className="font-semibold md:text-xs lg:text-sm ">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="text-sm text-gray-500 md:text-[10px] lg:text-sm">
                      Goal Amount
                    </h5>
                    <span className="font-semibold md:text-xs lg:text-sm">
                      {item.amount}
                    </span>
                  </div>
                  <div>
                    {item.health ? (
                      <>
                        <h5 className="text-sm text-gray-500 md:text-[10px] lg:text-sm">
                          Goal Health
                        </h5>
                        <span
                          className={`flex items-center gap-1 py-1 md:text-xs lg:text-sm font-semibold ${color}`}
                        >
                          {icon}
                          <span>{item.health}</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <h5 className="text-sm text-gray-500 md:text-xs xl:text-sm">
                          Goal Reached
                        </h5>
                        <span className="font-semibold md:text-xs xl:text-sm">
                          {item.reached}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {renderBoostSection(item, color)}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default PlanCard;
