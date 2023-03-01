import LoginForm from '../features/LoginForm/LoginForm';
import LogoSlogan from '../components/LogoSlogan/LogoSlogan';
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
            <LoginForm />
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
