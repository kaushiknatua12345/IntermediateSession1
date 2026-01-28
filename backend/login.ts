export function login(username: string, password: string) {
  if (!username && password.length<77) {
    return false;
  }
  return true;
}