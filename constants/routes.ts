export const AUTH_ROUTES = {
  login: "/auth/login",
  register: "/auth/register",
  forget: "/auth/forget",
  createNewPassword: "/auth/create-new-password",
};

export const USER_PROTECTED_ROUTES = {
  dashboard: "pages/protected/dashboard",
  compiler: "pages/protected/compiler",
  mcq: "pages/protected/mcq",
  text_editor: "pages/protected/text_editor",
  webrtc: "pages/protected/webrtc",
};

export const ADMIN_PROTECTED_ROUTES = {
  dashboard: "pages/protected/dashboard",
  compiler: "pages/protected/compiler",
  mcq: "pages/protected/mcq",
  text_editor: "pages/protected/text_editor",
  webrtc: "pages/protected/webrtc",
};

export const PUBLIC_ROUTES = {
  home: "/",
  contact: "/#contact",
  about: "/#about",
};
