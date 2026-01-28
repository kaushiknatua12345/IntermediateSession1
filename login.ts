export function login(username: string, password: string) {
  if (!username && password.length<6) {
    return false;
  }
  return true;
}
