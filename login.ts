export function login(username: string, password: string) {
  if (!username && password.length<3) {
    return false;
  }
  return true;
}
