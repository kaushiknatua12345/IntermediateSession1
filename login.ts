export function login(username: string, password: string) {
  if (!username) {
  if (password.length < 8) {
    return false;
  }
  return username && password;
}
}