import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": process.env.SECRET_API_KEY
  }
});
export const usersAPI = {
  getUsers: (currentPage = 1, count = 5) =>
    instance
      .get(`users?page=${currentPage}&count=${count}`)
      .then(response => response.data),
  followUser: userId =>
    instance.post("follow/" + userId).then(response => response.data),
  unFollowUser: userId =>
    instance.delete("follow/" + userId).then(response => response.data)
};

export const profileAPI = {
  authMe: () => instance.get("auth/me").then(response => response.data),
  getProfile: userId =>
    instance.get("profile/" + userId).then(response => response.data),
  getStatus: userId =>
    instance.get("profile/status/" + userId).then(response => response.data),
  updateStatus: status =>
    instance.put("profile/status", { status }).then(response => response.data),
  updatePhoto: photoFile => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => response.data);
  },
  updateProfileData: profile =>
    instance.put("profile", profile).then(response => response.data)
};

export const authAPI = {
  authMe: () => instance.get("/auth/me").then(response => response.data),
  login: (email, password, rememberMe = false, captcha) => {
    return instance
      .post("auth/login", { email, password, rememberMe, captcha })
      .then(response => response.data);
  },
  logout: () => instance.delete("auth/login").then(response => response.data)
};

export const securityAPI = {
  getCaptcha: () =>
    instance.get("security/get-captcha-url").then(response => response.data)
};
export const dialogsAPI = {
  getDialogs: () => instance.get("dialogs").then(response => response.data)
};
