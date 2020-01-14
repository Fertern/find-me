import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "8200782f-28dc-4c70-82bb-5f5cbe3f8b59"
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
  updateStatus: status => instance.put("profile/status", { status })
};

export const authAPI = {
  authMe: () => instance.get("/auth/me").then(response => response.data),
  login: (email, password, rememberMe = false) =>
    instance
      .post("auth/login", { email, password, rememberMe })
      .then(response => response.data),
  logout: () => instance.delete("auth/login").then(response => response.data)
};
