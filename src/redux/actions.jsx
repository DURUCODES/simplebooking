import { BOOKING, DELETE } from "./actionTypes";

export const makeBooking = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};

export const detelteBooking = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
