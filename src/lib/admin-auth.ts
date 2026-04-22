const SESSION_KEY = "aayush_admin_session";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

const getStorage = () => (typeof window !== "undefined" ? window.sessionStorage : null);

export const adminCredentials = {
  username: import.meta.env.VITE_ADMIN_USERNAME ?? DEFAULT_USERNAME,
  password: import.meta.env.VITE_ADMIN_PASSWORD ?? DEFAULT_PASSWORD,
};

export const isAdminAuthenticated = () => getStorage()?.getItem(SESSION_KEY) === "true";

export const signInAdmin = (username: string, password: string) => {
  if (username.trim() !== adminCredentials.username || password !== adminCredentials.password) {
    return false;
  }

  getStorage()?.setItem(SESSION_KEY, "true");
  return true;
};

export const signOutAdmin = () => {
  getStorage()?.removeItem(SESSION_KEY);
};
