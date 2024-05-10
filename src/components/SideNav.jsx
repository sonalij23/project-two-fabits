import React, { useState } from "react";
import fabits from "../assets/fabits.png";
import memoji from "../assets/memoji.svg";

//icons
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  MdHomeFilled,
  MdOutlineTrackChanges,
  MdOutlineRealEstateAgent,
  MdOutlineAddBusiness,
  MdAdminPanelSettings,
  MdOutlineTune,
} from "react-icons/md";
import { RiBubbleChartFill } from "react-icons/ri";


const SideNav = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="hidden h-screen md:block">
      <div className="flex flex-col h-screen px-6 mt-8">
        <div className="flex items-center justify-between">
          <img src={fabits} className="h-7 w-28" alt="Flowbite React Logo" />
          <span className=" border-gray-300 rounded-full border-[1px] p-1">
            <IoMdNotificationsOutline className="text-xl" />
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 py-4 mt-12 mb-6 bg-selago-two rounded-xl">
          <img src={memoji} className="w-10 h-8 lg:h-12 lg:w-14" alt="Flowbite React Logo" />
          <div className="flex justify-between">
            <div>
              <h4 className="text-sm font-semibold lg:text-base">Dhruv S.</h4>
              <p className="text-xs text-gray-500 lg:text-sm">dhruv@fabits.com</p>
            </div>
            <HiOutlineDotsVertical className="text-lg text-gray-500" />
          </div>
        </div>

        <ul>
          <MenuItem
            icon={<MdHomeFilled />}
            label="Home"
            selected={selectedMenu === "home"}
            onClick={() => handleMenuSelect("home")}
          />

          <span className="text-xs text-gray-500 uppercase ">Finance </span>
          <MenuItem
            icon={<MdOutlineTrackChanges />}
            label="Plan a Goal"
            selected={selectedMenu === "goal"}
            onClick={() => handleMenuSelect("goal")}
          />
          <MenuItem
            icon={<RiBubbleChartFill />}
            label="Discover Top Funds"
            selected={selectedMenu === "funds"}
            onClick={() => handleMenuSelect("funds")}
          />
          <MenuItem
            icon={<MdOutlineRealEstateAgent />}
            label="My Investments"
            selected={selectedMenu === "investment"}
            onClick={() => handleMenuSelect("investment")}
          />
          <MenuItem
            icon={<MdOutlineAddBusiness />}
            label="IPO"
            selected={selectedMenu === "ipo"}
            onClick={() => handleMenuSelect("ipo")}
          />
          <span className="text-xs text-gray-500 uppercase ">Insurance </span>
          <MenuItem
            icon={<MdAdminPanelSettings />}
            label="Insurance"
            selected={selectedMenu === "insurance1"}
            onClick={() => handleMenuSelect("insurance1")}
          />
          <MenuItem
            icon={<MdOutlineTune />}
            label="Insurance"
            selected={selectedMenu === "insurance2"}
            onClick={() => handleMenuSelect("insurance2")}
          />
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, selected, onClick }) => {
  return (
    <li
      className={`flex items-center gap-2 py-2 cursor-pointer lg:text-base text-sm px-4 mb-4 rounded-lg focus:outline-none ${
        selected
          ? "border-east-bay border-2 text-east-bay bg-opacity-10 bg-east-bay"
          : ""
      }`}
      onClick={onClick}
    >
      {icon} <span>{label}</span>
    </li>
  );
};
export default SideNav;
