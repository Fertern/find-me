export const mapNewUserList = (arr, newUserId, followStateObj) =>
  arr.map(u => {
    if (u.id === newUserId) {
      return { ...u, ...followStateObj };
    }
    return u;
  });
