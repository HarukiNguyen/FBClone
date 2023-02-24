import { useState } from 'react';
import VerDivider from '../VerDivider';
import LoginInput from './LoginInput';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleInput(e) {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPass(e.target.value);
    }
  }

  return (
    <form
      action=""
      method="POST"
      className="formBox 900:w-[400px] 900:min-w-[400px]"
    >
      <LoginInput
        type="email"
        placeholder="Nhập email của bạn"
        value={email}
        onChange={handleInput}
      />
      <LoginInput
        type="password"
        placeholder="Mật khẩu"
        value={pass}
        onChange={handleInput}
      />
      <div className="py-2.5">
        <button
          type="submit"
          className="button w-full bg-fb-primary py-2.5 text-xl hover:bg-[#166fe5] focus:shadow-primaryBtn"
        >
          Đăng nhập
        </button>
      </div>
      <div className="pt-1.5 text-center text-sm font-medium">
        <a
          href="/"
          className="focus font-Helvetica text-[15px] text-fb-primary hover:underline"
        >
          Quên mật khẩu?
        </a>
      </div>
      <VerDivider className={'py-6'} />
      <div className="pb-4 text-center">
        <button
          type="submit"
          className="button bg-[#42b72a] py-[13px] text-[17px]  hover:bg-[#36a420] focus:shadow-primaryBtn"
        >
          Tạo tài khoản mới
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
