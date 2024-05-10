import { Navbar } from "flowbite-react";
import fabits from '../assets/fabits.png';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";




const Header = () => {
  return (
    <Navbar className="flex justify-between p-4 md:hidden">
      <div className="flex items-center justify-between gap-4">
        <Navbar.Toggle />
       <img 
            src={fabits}
            className="w-24 h-6 "
            alt="Flowbite React Logo"
          />
       
      </div>

      <div className="flex items-center justify-between gap-4">
        <span >
        <IoMdNotificationsOutline  className="w-6 h-6"/>
        </span>
        <span >
        <RiAccountCircleLine  className="w-6 h-6" />

        </span>
      </div>
    </Navbar>
  );
};

export default Header;
