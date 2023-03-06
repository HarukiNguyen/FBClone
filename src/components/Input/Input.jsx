import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IsValidInfoContext } from '../../features/Login/LoginForm';
import LoginInput from '../../features/Login/LoginInput';
import SignupInput from '../../features/Signup/SignupInput';
import validateEmail from '../../ultilities/validateEmail';
import validateFill from '../../ultilities/validateFill';
import getInvalidInfo from '../Input/getValidateInfo';

function Input({
  autoFocus,
  type,
  name,
  placeholder,
  value,
  isEmail,
  isRequired,
  setValue,
  setIsValidInfo,
  inputType,
}) {
  const [validateInfo, setValidateInfo] = useState({});
  const [isInvalid, setIsInvalid] = useState(null);
  const [message, setMessage] = useState('');
  const isValidInfo = useContext(IsValidInfoContext);
  const validateFillMemoized = useCallback(validateFill, []);
  const validateEmailMemoized = useCallback(validateEmail, []);

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

  const handleChange = useCallback(
    (e) => {
      setIsInvalid(false);
      setValue(e.target.value);
    },
    [setIsInvalid, setValue]
  );

  const handleBlur = useCallback(() => {
    const msg = {
      fill: 'Trường này là bắt buộc',
      email: 'Trường này phải là email',
    };

    const newValidateInfo = {};

    if (isRequired) {
      newValidateInfo.fill = [validateFillMemoized(value), msg.fill];
    }

    if (isEmail) {
      newValidateInfo.email = [validateEmailMemoized(value), msg.email];
    }

    setValidateInfo(newValidateInfo);
  }, [
    value,
    isEmail,
    isRequired,
    validateFillMemoized,
    validateEmailMemoized,
    setIsValidInfo,
  ]);

  return inputType === 'login' ? (
    <LoginInput
      invalidInfo={{ isInvalid, message }}
      autoFocus={autoFocus}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  ) : (
    <SignupInput
      autoFocus={autoFocus}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default React.memo(Input);
