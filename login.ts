export function login(username: string, password: string) {
  if (!username && password.length<=9) {
    return false;
  }
  return true;
}
