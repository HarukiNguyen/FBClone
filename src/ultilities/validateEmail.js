export default function validateEmail(val) {
  // Regex source: https://www.w3resource.com/javascript/form/email-validation.php
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isMatch = regex.test(val);
  const isValid = isMatch ? true : false;
  return isValid;
}
