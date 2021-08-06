import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
const Header = () => {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [numberofGuests, setnumberofGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resatInput = () => {
    setsearchInput("");
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
    bg-white shadow-md  p-5 md:px-10"
    >
      <div
        className="relative flex items-center h-10
      cursor-pointer my-auto "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div
        className=" flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white
        rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      <div
        className="flex items-center justify-end space-x-4
      text-gray-500"
      >
        <p className="hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div
          className="flex flex-col col-span-3 mx-auto
       mt-5 "
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="
            w-12 pl-2 text-lg outline-none text-red-400"
              value={numberofGuests}
              min={1}
              onChange={(e) => setnumberofGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resatInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
