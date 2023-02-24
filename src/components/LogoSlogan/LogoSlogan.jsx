import facebookLogo from './facebook.svg';

function LogoSlogan() {
  const slogan =
    'Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.';
  return (
    <header className="1075:max-w-[500px]">
      <div className="flex justify-center 900:justify-start">
        <img
          src={facebookLogo}
          alt="Facebook logo"
          className="-m-[28px] w-[300px] 900:min-w-[300px]"
        />
      </div>
      <h1 className="pt-5 pb-10 text-center font-SFProDisplay text-2xl leading-7 900:pb-5 900:text-left 1075:text-[28px] 1075:leading-8">
        {slogan}
      </h1>
    </header>
  );
}

export default LogoSlogan;
