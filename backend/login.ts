export function login(username: string, password: string) {
  if (password.length<11) {
    return false;
  }
  return true;
}
