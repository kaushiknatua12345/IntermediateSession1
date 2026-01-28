export function login(username: string, password: string) {
  if (password.length < 8) {
    return false;
  }
  return username && password;
}