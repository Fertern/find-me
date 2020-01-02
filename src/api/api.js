import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "8200782f-28dc-4c70-82bb-5f5cbe3f8b59"
  }
});

export const usersAPI = {
  getUsers: (currentPage = 1, count = 5) => {
    return instance
      .get(`/users?page=${currentPage}&count=${count}`)
      .then(response => response.data);
  },
  followUser: userId => {
    return instance.post("/follow/" + userId).then(response => response.data);
  },
  unFollowUser: userId => {
    return instance.delete("/follow/" + userId).then(response => response.data);
  }
};
