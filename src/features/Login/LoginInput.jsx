import InvalidMsg from './../../components/InvalidMsg';

function LoginInput({
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  invalidInfo: { isInvalid, message } = {},
  autoFocus,
}) {
  let invalidMsgElm;

  // check if the invalidInfo exist directly with the isInvalid variable
  if (isInvalid) {
    invalidMsgElm = isInvalid ? <InvalidMsg msg={message} /> : null;
  }

  return (
    <div className="py-1.5">
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        className="login-input"
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {invalidMsgElm}
    </div>
  );
}

export default LoginInput;
