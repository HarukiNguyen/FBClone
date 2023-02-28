export default function validateEmail(val) {
  // Regex source: https://www.w3resource.com/javascript/form/email-validation.php
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(val);
}
