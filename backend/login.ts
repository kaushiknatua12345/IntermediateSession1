export function login(username: string, password: string) {
  if (password.length>15) {
    return true;
  }
  return false;
}
