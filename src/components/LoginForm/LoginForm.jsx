import { useState } from 'react';
import Input from '../Input/Input';
import SignupBtn from '../SignupBtn';
import VerDivider from '../VerDivider';
import LoginBtn from './LoginBtn';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <form
      action=""
      method="POST"
      className="formBox 900:w-[400px] 900:min-w-[400px]"
    >
      <Input
        autoFocus
        type="email"
        placeholder="Nhập email của bạn"
        value={email}
        setValue={setEmail}
        isEmail
        isRequired
      />
      <Input
        type="password"
        placeholder="Mật khẩu"
        value={pass}
        setValue={setPass}
        isRequired
      />
      <LoginBtn />
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
