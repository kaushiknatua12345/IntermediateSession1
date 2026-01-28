export function login(username: string, password: string) {
  if (!username && password.length<78) {
    return false;
  }
  return true;
}