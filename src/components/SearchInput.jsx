import { TextInput } from "flowbite-react";

//icons
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { CiFilter } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="px-4 py-6 mt-2 bg-white border-t md:pb-4 md:px-0 md:border-t-0 md:border-b">
      <div className="md:flex md:justify-between md:items-center">
        <h1 className="pb-6 text-xl font-semibold lg:text-2xl">
          Track current goals
        </h1>

        {/* filter */}
        <div className="hidden w-auto gap-2 text-xs font-semibold md:flex text-east-bay">
          <div className="flex items-center w-1/2 gap-2">
            <span>Filters </span>
            <CiFilter />
          </div>

          <form className="w-5/6 ">
            <TextInput
              type="text"
              placeholder="Search"
              icon={IoIosSearch}
              color="white"
            />
          </form>
          <span className="p-1 text-3xl border-gray-300 rounded-full border-[1px] md:hidden">
            <MdOutlineSort className="text-gray-400" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
