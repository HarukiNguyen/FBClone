import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import Input from '../../components/Input/Input';
import SignupBtn from '../../components/SignupBtn';
import VerDivider from '../../components/VerDivider';
import fetchUsersData from './fetchUsersData';
import {
  SET_CLICK_EVENT,
  SET_EMAIL,
  SET_IS_VALID_INFO,
  SET_PASS,
  SET_USERS_DATA,
} from './loginActions';
import LoginBtn from './LoginBtn';
import reducer, { initialState } from './loginReducers';

export const IsValidInfoContext = createContext({});

function LoginForm() {
  const [{ email, pass, isValidInfo, clickEvent, usersData }, dispatch] =
    useReducer(reducer, initialState);
  const memoizedFetchUsersData = useCallback(fetchUsersData, []);

  useEffect(() => {
    const usersDataUrl = 'http://localhost:3000/users';

    if (
      Object.keys(isValidInfo).length !== 0 &&
      Object.values(isValidInfo).every(Boolean)
    ) {
      if (usersData.length === 0) {
        memoizedFetchUsersData(usersDataUrl, dispatch, SET_USERS_DATA);
      } else {
        const registedUser = usersData.find((user) => {
          return user.email === email;
        });
        console.log(registedUser ? 'registed' : 'not registed');
      }
    }
  }, [clickEvent, dispatch, usersData]);

  const handleLogin = useCallback(
    // TODO(fix): sometimes this function doesn't work when changing values of the inputs
    // Eg: both have valid inputs --> delete email --> can't run this func when click the login button
    (e) => {
      e.preventDefault();

      if (!isValidInfo) {
        console.error(
          `Can't handle login logic: ${JSON.stringify(isValidInfo)}`
        );
      }

      // click event for trigger the useCallback
      dispatch({ type: SET_CLICK_EVENT, payload: !clickEvent });
    },

    [isValidInfo, SET_CLICK_EVENT, clickEvent]
  );

  const inputActionCreator = useCallback(
    (type, val) => {
      dispatch({ type, payload: val });
    },
    [dispatch]
  );

  const handleEmailChange = useCallback(
    (value) => {
      inputActionCreator(SET_EMAIL, value);
    },
    [dispatch]
  );

  const handlePassChange = useCallback(
    (value) => {
      inputActionCreator(SET_PASS, value);
    },
    [dispatch]
  );

  const handleIsValidInfoChange = useCallback(
    (value) => {
      inputActionCreator(SET_IS_VALID_INFO, value);
    },
    [dispatch]
  );

  return (
    <form
      action=""
      method="POST"
      className="formBox 900:w-[400px] 900:min-w-[400px]"
    >
      <IsValidInfoContext.Provider value={isValidInfo}>
        <Input
          autoFocus
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          setValue={handleEmailChange}
          isEmail
          isRequired
          setIsValidInfo={handleIsValidInfoChange}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          value={pass}
          setValue={handlePassChange}
          isRequired
          setIsValidInfo={handleIsValidInfoChange}
        />
      </IsValidInfoContext.Provider>
      <LoginBtn onClick={handleLogin} />
      <div className="pt-1.5 text-center text-sm font-medium">
        <a
          href="/"
          className="focus text-[15px] font-normal text-fb-primary hover:underline"
        >
          Quên mật khẩu?
        </a>
      </div>
      <VerDivider className={'py-6'} />
      <SignupBtn />
    </form>
  );
}

export default React.memo(LoginForm);
