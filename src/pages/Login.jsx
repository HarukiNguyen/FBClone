import LogoSlogan from '../components/LogoSlogan/LogoSlogan';
import VerDivider from '../components/VerDivider';
import Footer from '../layouts/Footer';

function Login() {
  return (
    <div>
      <div className="h-screen bg-[#f0f2f5] px-5 pt-10 900:flex 900:justify-center 900:px-10">
        <main className="w-full 900:flex 900:items-center 900:justify-between 1075:max-w-[980px]">
          <div className="mx-auto max-w-[400px] 900:flex 900:max-w-none 900:justify-between">
            <div className="900:flex 900:w-[400px] 900:flex-col 900:items-start 900:pt-[65px] 900:pr-[55px] 1075:w-[580px] 1075:pr-0">
              <LogoSlogan />
            </div>
            <form
              action=""
              method="POST"
              className="formBox 900:w-[400px] 900:min-w-[400px]"
            >
              <div className="py-1.5">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Nhập email của bạn"
                  aria-label="Nhập email của bạn"
                />
              </div>
              <div className="py-1.5">
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Mật khẩu"
                  aria-label="Mật khẩu"
                />
              </div>
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
          </div>
        </main>
      </div>
      <div className="mx-auto 900:max-w-[820px] 1075:max-w-[980px]">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
