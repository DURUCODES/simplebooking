import React from "react";

import { PiAirplaneTakeoffLight } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className="flex  justify-between p-3  bg-gray-50  items-center">
      <div className="w-[250px]  flex  items-center  cursor-pointer">
        {/* LOGO */}
        <p className="text-purple-500  text-2xl">
          <PiAirplaneTakeoffLight />
        </p>
        <h2 className="text-2xl ">Travel King</h2>
      </div>

      <div>
        {/* NAVBAR */}
        <button className="bg-purple-500 px-6 py-2 rounded  text-white font-semibold c">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
