import { SET_EMAIL, SET_IS_VALID_INFO, SET_PASS } from './loginActions';

export const initialState = {
  email: '',
  pass: '',
  isValidInfo: {},
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    case SET_PASS: {
      return { ...state, pass: action.payload };
    }
    case SET_IS_VALID_INFO: {
      return { ...state, isValidInfo: action.payload };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
