import facebookLogo from './facebook.svg';

function LogoSlogan() {
  const slogan =
    'Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.';
  return (
    <header>
      <div className="flex justify-center">
        <img
          src={facebookLogo}
          alt="Facebook logo"
          className="-m-[28px] w-[300px] max-w-full"
        />
      </div>
      <h1 className="pt-5 pb-10 text-center font-SFProDisplay text-2xl leading-7">
        {slogan}
      </h1>
    </header>
  );
}

export default LogoSlogan;
