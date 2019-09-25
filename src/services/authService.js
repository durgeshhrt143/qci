const tokenkey = "token";
export function login() {
  localStorage.setItem(tokenkey, true);
}
export function logout() {
  localStorage.removeItem(tokenkey);
}
export function getCurrentUser() {
  try {
    let jwt = localStorage.getItem(tokenkey);
    return jwt;
  } catch (ex) {
    return null;
  }
}
export default {
  logout,
  login,
  getCurrentUser
};
