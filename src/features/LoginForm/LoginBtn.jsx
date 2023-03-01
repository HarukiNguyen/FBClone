function LoginBtn({ onClick }) {
  return (
    <div className="py-2.5">
      <button
        type="submit"
        className="button w-full bg-fb-primary py-2.5 text-xl hover:bg-[#166fe5] focus:shadow-primaryBtn"
        onClick={(e) => onClick(e)}
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default LoginBtn;
