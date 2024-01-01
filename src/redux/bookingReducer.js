import { BOOKING, DELETE } from "./actionsTypes";
const initialState = {
  data: [],
};
export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };

    case DELETE:
      const filterData = state.data.filter((data) => data.id !== action.payload);
      return { data: newData };

    default:
    return state 
  }
};

export default bookingReducer;
