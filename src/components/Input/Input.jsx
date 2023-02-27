import { useCallback, useEffect, useState } from 'react';
import validateEmail from '../../ultilities/validateEmail';
import validateFill from '../../ultilities/validateFill';
import getInvalidInfo from '../Input/getValidateInfo';
import LoginInput from '../LoginForm/LoginInput';

function Input({
  autoFocus,
  type,
  placeholder,
  value,
  isEmail,
  isRequired,
  setValue,
}) {
  const [validateInfo, setValidateInfo] = useState({});
  const [invalidInfo, setInvalidInfo] = useState({});

  useEffect(() => {
    if (Object.keys(validateInfo).length !== 0) {
      getInvalidInfo(validateInfo, setInvalidInfo);
    }
  }, [validateInfo]);

  const handleInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    const msg = {
      fill: 'Trường này là bắt buộc',
      email: 'Trường này phải là email',
    };

    const newValidateInfo = {};

    if (isRequired) {
      newValidateInfo.fill = [validateFill(value), msg.fill];
    }

    if (isEmail) {
      newValidateInfo.email = [validateEmail(value), msg.email];
    }

    setValidateInfo(newValidateInfo);
  }, [value]);

  return (
    <LoginInput
      invalidInfo={invalidInfo}
      autoFocus={autoFocus}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
      onBlur={handleBlur}
    />
  );
}

export default Input;
