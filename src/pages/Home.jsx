import React from "react";
import SideNav from "../components/SideNav";
import ContentContainer from "../components/ContentContainer";

const Home = () => {
  return (
    <div className="w-full md:grid md:grid-cols-7 xl:grid-cols-5 bg-selago">
      <div className="xl:col-span-1 md:col-span-2 md:border-r"><SideNav /></div>
      <div className="col-span-5 xl:col-span-4 "><ContentContainer /></div>
         
    </div>
    
  );
};

export default Home;
