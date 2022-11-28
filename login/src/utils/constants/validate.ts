const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
const password =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const validateLength = (value: string) =>
  value.length >= 8 && value.length <= 16;

export const validatePassword = (value: string) => {
  return password.test(value) && validateLength(value);
};

export function validateEmail(value: string) {
  return email.test(value);
}
