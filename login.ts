export function login(username: string, password: string) {
  if (!username && password.length<21) {
    return false;
  }
  return true;
}
