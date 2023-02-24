function LoginInput({ type, placeholder, onChange, value }) {
  return (
    <div className="py-1.5">
      <input
        type={type}
        name={type}
        className="input"
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default LoginInput;
