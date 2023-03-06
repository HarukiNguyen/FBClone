import Input from '../../components/Input/Input';
import SignupBtn from '../../components/SignupBtn';
import ExtraInput from './ExtraInput';
import { extraInputInfos } from './extraInputInfos';
import { mainInputInfos } from './mainInputInfos';

function Signup() {
  return (
    <div>
      <div>
        <header>
          <span>Đăng ký</span>
          <span>Nhanh chóng và dễ dàng.</span>
        </header>
        <form action="">
          {mainInputInfos.map((info) => {
            const { type, name, placeholder } = info;

            return (
              <Input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
              />
            );
          })}
          <ExtraInput extraInputInfos={extraInputInfos} />
          <SignupBtn className="min-w-[200px] rounded-md px-8 py-2 text-lg font-bold leading-tight text-white transition-colors focus:outline-none">
            Đăng ký
          </SignupBtn>
        </form>
      </div>
    </div>
  );
}

export default Signup;
