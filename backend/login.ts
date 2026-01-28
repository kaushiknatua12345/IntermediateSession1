export function login(username: string, password: string) {
  if (!username || password.length>8) {
    return true;
  }
  return false;
}