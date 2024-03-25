export const storeUser = (data: any) => {
    localStorage.setItem("user", JSON.stringify ({
        username: data.user.username,
        jwt: data.jwt
    }))
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
      return JSON.parse(stringifiedUser);
    } else {
      return {}; // Return an empty object if no user data
    }
  };
  