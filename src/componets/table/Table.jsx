import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

import { detelteBooking } from "../../redux/actions";
const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const id = parseInt(e.currentTarget.id);
    dispatch(detelteBooking(id));
  };
  console.log(data);
  return (
    <div>
      {data.length && (
        <div>
          <div className="overflow-x-auto bg-white my-[20px]">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-200">
                  <th></th>
                  <th>Destination From </th>
                  <th> Destination To</th>
                  <th>Date</th>
                  <th>Guest</th>
                  <th>Flight type</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((data, index) => (
                  <tr key={index}>
                    <th>{data.id}</th>
                    <td>{data.form}</td>
                    <td>{data.to}</td>
                    <td>{data.date}</td>
                    <td>{data.guest}</td>
                    <td>{data.class}</td>
                    <td>
                      <button
                        id={`${data.id}`}
                        className="bg-red-500 p-3 text-white rounded cursor-pointer"
                        onClick={handleDelete}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
