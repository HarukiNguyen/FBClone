import Input from '../../components/Input/Input';
import SignupBtn from '../../components/SignupBtn';
import ExtraInput from './ExtraInput';
import { extraInputInfos } from './extraInputInfos';
import { mainInputInfos } from './mainInputInfos';
import closeIcon from './close-icon.png';
import VerDivider from '../../components/VerDivider';

function Signup() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center bg-[#fcfcfd]/[.8] px-5">
      <div className="form-box w-full max-w-[432px] bg-white py-3">
        <header className="relative">
          <span className="block text-3xl font-semibold leading-9">
            Đăng ký
          </span>
          <span className="block">Nhanh chóng và dễ dàng.</span>
          <button
            type="button"
            className="absolute top-0 right-0 translate-x-1/4"
          >
            <img src={closeIcon} alt="Close signup form icon" />
          </button>
        </header>
        <VerDivider className="-mx-4 py-3" />
        <form action="">
          {mainInputInfos.map((info) => {
            const { inputWrapperClassName, type, name, placeholder } = info;

            return (
              <div className={`py-[5px] ${inputWrapperClassName}`}>
                <Input
                  inputType="signup"
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                />
              </div>
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
