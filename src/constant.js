export const CLEAR_DATA = 'CLEAR_DATA';
export const DELETE_MEETING = 'DELETE_MEETING';
export const ADD_MEETING = 'ADD_MEETING';
export const LOAD_DATA = 'LOAD_DATA';
export const HOMEPAGE = 'HOMEPAGE';
export const ABOUT = 'ABOUT';

export const setHome = () => {
  return { type: HOMEPAGE };
};
export const setAbout = () => {
  return { type: ABOUT };
};

export const clearData = () => {
  return { type: CLEAR_DATA };
};
export const deleteMeeting = (id) => {
  return { type: DELETE_MEETING, payload: id };
};

export const addMeeting = (obj) => {
  return { type: ADD_MEETING, payload: obj };
};

export const loadData = (data) => {
  return { type: LOAD_DATA, payload: data };
};
