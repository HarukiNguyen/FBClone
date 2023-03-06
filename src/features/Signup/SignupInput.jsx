function SignupInput({ autoFocus, type, placeholder }) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      name={type}
      className="signup-input"
      placeholder={placeholder}
      aria-label={placeholder}
      // onChange={onChange}
      // onBlur={onBlur}
      // value={value}
    />
  );
}

export default SignupInput;
