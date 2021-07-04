function telephoneCheck(phoneNumber) {
  const phoneNumberRegEx = /^(1-?|1 ?)?(\([0-9]{3}\)|[0-9]{3})[ |-]?[0-9]{3}[ |-]?[0-9]{4}$/;
  return phoneNumberRegEx.test(phoneNumber);
}

export { telephoneCheck };
