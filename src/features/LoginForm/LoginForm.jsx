import React, { createContext, useCallback, useReducer } from 'react';
import Input from '../../components/Input/Input';
import SignupBtn from '../../components/SignupBtn';
import VerDivider from '../../components/VerDivider';
import { SET_EMAIL, SET_IS_VALID_INFO, SET_PASS } from './loginActions';
import LoginBtn from './LoginBtn';
import reducer, { initialState } from './loginReducers';

export const IsValidInfoContext = createContext({});

function LoginForm() {
  const [{ email, pass, isValidInfo }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleLogin = useCallback(
    // TODO(fix): sometimes this function doesn't work when changing values of the inputs
    // Eg: both have valid inputs --> delete email --> can't run this func when click the login button
    (e) => {
      e.preventDefault();
      if (Object.values(isValidInfo).every(Boolean)) {
        // handle login logic
        console.log('valid');
      } else {
        // handle invalid login
        console.log('invalid');
      }
    },
    [isValidInfo]
  );

  const actionCreator = useCallback(
    (type, val) => {
      dispatch({ type, payload: val });
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
          setValue={(value) => actionCreator(SET_EMAIL, value)}
          isEmail
          isRequired
          setIsValidInfo={(value) => {
            actionCreator(SET_IS_VALID_INFO, value);
          }}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          value={pass}
          setValue={(value) => actionCreator(SET_PASS, value)}
          isRequired
          setIsValidInfo={(value) => {
            actionCreator(SET_IS_VALID_INFO, value);
          }}
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
