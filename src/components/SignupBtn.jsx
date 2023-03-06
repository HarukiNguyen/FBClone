function SignupBtn({ children, className }) {
  return (
    <div className="pb-4 text-center">
      <button
        type="submit"
        className={`${className} bg-[#42b72a] hover:bg-[#36a420] focus:shadow-primaryBtn`}
      >
        {children}
      </button>
    </div>
  );
}

export default SignupBtn;
