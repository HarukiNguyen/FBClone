const footerItems = {
  signUp: {
    text: 'Đăng ký',
    url: '/',
    title: 'Đăng ký Facebook',
  },
  logIn: {
    text: 'Đăng nhập',
    url: '/',
    title: 'Đăng nhập Facebook',
  },
  watch: {
    text: 'Watch',
    url: '/',
    title: 'Lướt xem video của chúng tôi trên tab Watch',
  },
};

function Footer() {
  const listItems = Object.entries(footerItems).map(([name, info]) => {
    return (
      <li key={name} className="pr-3">
        <a
          href={info.url}
          title={info.title}
          className="focus text-xs text-[#737373] hover:underline"
        >
          {info.text}
        </a>
      </li>
    );
  });
  return (
    <footer className="py-6 px-10 font-Helvetica">
      <ul className="flex">{listItems}</ul>
      <div>
        <span className="font-Helvetica text-[11px] text-[#737373]">
          Meta © 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
