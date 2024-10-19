import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../../redux/actions";
import Table from "../table/Table";
const Booking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [booking, setBooking] = useState({});
  const size = data.length;
  const handleChange = (e) => {
    e.preventDefault();
    const newBooking = { ...booking };
    newBooking[e.target.name] = e.target.value;
    setBooking(newBooking);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (Object.keys(booking).length === 5) {
      dispatch(makeBooking({ ...booking, id: size + 1 }));
      console.log(booking);
    } else {
      alert("fill booking properly");
    }
  };
  return (
    <div className="mt-[160px] mx-4 relative">
      <div className="bg-white rounded-md max-w-6xl mx-auto w-full">
        <form className="flex flex-col md:flex-row">
          {/* From DESTINATION BELOW */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2 ">
            <p>Destination form</p>
            <div className="flex flex-row ">
              <select
                name="form"
                className=" outline-none px-2 w-full"
                onChange={(e) => handleChange(e)}
              >
                <option>Please Select</option>
                <option>Nigeria </option>
                <option>New York </option>
                <option>UK</option>
              </select>
            </div>
          </div>
          {/* TO DESTINATION  BELOW */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2 ">
            <p>Destination To</p>
            <div className="flex flex-row ">
              <select
                className=" outline-none px-2 w-full "
                name="to"
                onChange={(e) => handleChange(e)}
              >
                <option>Please Select</option>
                <option>Nigeria </option>
                <option>New York </option>
                <option>UK</option>
              </select>
            </div>
          </div>
          {/* TO DATE  BELOW */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2 ">
            <p>Journey Date</p>
            <input
              onChange={(e) => handleChange(e)}
              type="date"
              name="date"
              required
              className=" outline-none px-2 w-full "
            />
          </div>
          {/* GUEST BELOW  */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2 ">
            <p>Guest </p>
            <div className="flex flex-row ">
              <select
                className=" outline-none px-2 w-full  "
                onChange={(e) => handleChange(e)}
                name="guest"
              >
                <option>Please Select</option>
                <option>1 Person </option>
                <option>2 Persons </option>
                <option>3 Persons</option>
              </select>
            </div>
          </div>

          {/* CLASS NAME  */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2 ">
            <p>Class name/ flight type </p>
            <div className="flex flex-row ">
              <select
                className=" outline-none px-2 w-full "
                onChange={(e) => handleChange(e)}
                name="class"
              >
                <option>Please Select</option>
                <option>First Class </option>
                <option>Business Class </option>
                <option>Economy Class</option>
              </select>
            </div>
          </div>
          <button
            onClick={(e) => handleBook(e)}
            type="submit"
            className="bg-purple-500 text-white font-semibold rounded-b md:rounded-b-none md:rounded-r py-3 md:py-1 px-8 flex items-center justify-center"
          >
            <GoPlus className="text-2xl font-bold" />
            Book Now
          </button>
        </form>
      </div>
      <Table />
    </div>
  );
};

export default Booking;
