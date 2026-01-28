export function login(username: string, password: string) {
  if (!username && password.length<5) {
    return false;
  }
  return true;
}
