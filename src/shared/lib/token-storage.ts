import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export function getAccessToken() {
  return Cookies.get(TOKEN_KEY) || null;
}

export function saveTokenStorage(token: string) {
  Cookies.set(TOKEN_KEY, token, { expires: 30 });
}

export function removeTokenFromStorage() {
  Cookies.remove(TOKEN_KEY);
}
