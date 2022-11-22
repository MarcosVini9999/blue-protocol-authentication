const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;

export function validateEmail(value: string) {
  return email.test(value);
}

export function validatePassword(value: string) {
  return password.test(value);
}
