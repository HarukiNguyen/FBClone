import {
  SET_CLICK_EVENT,
  SET_EMAIL,
  SET_IS_VALID_INFO,
  SET_PASS,
  SET_USERS_DATA,
} from './loginActions';

export const initialState = {
  email: '',
  pass: '',
  isValidInfo: {},
  clickEvent: true,
  usersData: [],
};

export default function reducer(state, { type, payload }) {
  switch (type) {
    case SET_EMAIL: {
      return { ...state, email: payload };
    }
    case SET_PASS: {
      return { ...state, pass: payload };
    }
    case SET_IS_VALID_INFO: {
      return { ...state, isValidInfo: payload };
    }
    case SET_CLICK_EVENT: {
      return { ...state, clickEvent: payload };
    }
    case SET_USERS_DATA: {
      return { ...state, usersData: payload };
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}
