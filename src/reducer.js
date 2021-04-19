import {
  CLEAR_DATA,
  DELETE_MEETING,
  LOAD_DATA,
  ADD_MEETING,
  HOMEPAGE,
  ABOUT,
} from './constant';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return { ...state, data: [] };
    case LOAD_DATA:
      return { ...state, data: action.payload };
    case ADD_MEETING:
      const newMeet = [...state.data, action.payload];
      return { ...state, data: newMeet };
    case DELETE_MEETING:
      const newData = state.data.filter((item) => action.payload !== item._id);
      return { ...state, data: newData };
    case HOMEPAGE:
      return { ...state, mainpage: true };
    case ABOUT:
      return { ...state, mainpage: false };
    default:
      return state;
  }
};
