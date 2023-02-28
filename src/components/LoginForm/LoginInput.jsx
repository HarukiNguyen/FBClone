import InvalidMsg from '../InvalidMsg';

function LoginInput({
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  invalidInfo,
  autoFocus,
}) {
  let invalidMsgElm;

  if (invalidInfo) {
    const { isInvalid, message } = invalidInfo;
    invalidMsgElm = isInvalid ? <InvalidMsg msg={message} /> : null;
  }

  return (
    <div className="py-1.5">
      <input
        autoFocus={autoFocus ? autoFocus : 0}
        type={type}
        name={type}
        className="input"
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
