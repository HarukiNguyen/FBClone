import { createContext, useCallback, useState } from 'react';
import Input from '../Input/Input';
import SignupBtn from '../SignupBtn';
import VerDivider from '../VerDivider';
import LoginBtn from './LoginBtn';

export const IsValidInfoContext = createContext({});

function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValidInfo, setIsValidInfo] = useState({});

  const handleLogin = useCallback(
    // TODO(fix): sometimes this function doesn't work when changing values of the inputs
    // Eg: both have valid inputs --> delete email --> can't run this func when click the login button
    (e) => {
      e.preventDefault();
      if (Object.values(isValidInfo).every((info) => info)) {
        // handle login logic
        console.log('valid');
      } else {
        // handle invalid login
        console.log('invalid');
      }
    },
    [isValidInfo]
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
          setValue={setEmail}
          isEmail
          isRequired
          setIsValidInfo={setIsValidInfo}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          value={pass}
          setValue={setPass}
          isRequired
          setIsValidInfo={setIsValidInfo}
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

export default LoginForm;
