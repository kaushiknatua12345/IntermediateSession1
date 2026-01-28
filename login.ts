export function login(username: string, password: string) {
  if (!username && password.length<11) {
    return false;
  }
  return true;
}
