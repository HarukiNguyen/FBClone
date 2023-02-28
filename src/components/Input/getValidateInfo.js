export default function getInvalidInfo(
  validateInfo,
  setIsInvalid,
  setMessage,
  setIsValidInfo,
  type,
  isValidInfo
) {
  // Check if the input is valid
  const isInvalid = !Object.values(validateInfo).every((info) => info[0]);

  // Set invalid message
  let msg = '';
  if (validateInfo.fill && !validateInfo.fill[0]) {
    msg = validateInfo.fill[1];
  } else {
    const invalidInfoEntry = Object.entries(validateInfo).find(
      ([, [isValid]]) => {
        return !isValid;
      }
    );
    msg = invalidInfoEntry ? invalidInfoEntry[1] : '';
  }

  setIsValidInfo({ ...isValidInfo, [type]: !isInvalid });
  setIsInvalid(isInvalid);
  setMessage(msg);
}
