const validateString = (name) => {
  const pattern = /^[A-Za-z]+$/;

  if (!pattern.test(name)) {
    throw new Error("String must only contain a string.");
  }
  return true;
};

const validateEmail = (emailAddress) => {
  const pattern = /[A-Za-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  if (!pattern.test(emailAddress)) {
    throw new Error(
      "Email format not correct. Must be in the following order: 'characters@characters.domain'"
    );
  }
  return true;
};
