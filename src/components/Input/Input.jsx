import { useCallback, useContext, useEffect, useState } from 'react';
import validateEmail from '../../ultilities/validateEmail';
import validateFill from '../../ultilities/validateFill';
import getInvalidInfo from '../Input/getValidateInfo';
import { IsValidInfoContext } from '../LoginForm/LoginForm';
import LoginInput from '../LoginForm/LoginInput';

function Input({
  autoFocus,
  type,
  placeholder,
  value,
  isEmail,
  isRequired,
  setValue,
  setIsValidInfo,
}) {
  const [validateInfo, setValidateInfo] = useState({});
  const [isInvalid, setIsInvalid] = useState(null);
  const [message, setMessage] = useState('');
  const isValidInfo = useContext(IsValidInfoContext);

  useEffect(() => {
    if (Object.keys(validateInfo).length !== 0) {
      getInvalidInfo(
        validateInfo,
        setIsInvalid,
        setMessage,
        setIsValidInfo,
        type,
        isValidInfo
      );
    }
  }, [validateInfo]);

  const handleChange = useCallback((e) => {
    setIsInvalid(false);
    setValue(e.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    const msg = {
      fill: 'Trường này là bắt buộc',
      email: 'Trường này phải là email',
    };

    const newValidateInfo = {};

    isRequired
      ? (newValidateInfo.fill = [validateFill(value), msg.fill])
      : null;

    isEmail
      ? (newValidateInfo.email = [validateEmail(value), msg.email])
      : null;

    setValidateInfo(newValidateInfo);
  }, [value]);

  return (
    <LoginInput
      invalidInfo={{ isInvalid, message }}
      autoFocus={autoFocus}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export default Input;
