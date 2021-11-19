export const signup = async (user) => {
  return await fetch("http://localhost:8080/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = async (user) => {
<<<<<<< HEAD
  return await fetch("http://localhost:4000/api/login", {
=======
  return await fetch("http://localhost:8080/api/login", {
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    //   return fetch(`${API}/signout`, {
    //     method: "GET"
    //   })
    //     .then(response => console.log("signout success"))
    //     .catch(err => console.log(err));
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    console.log(JSON.parse(localStorage.getItem("jwt")))
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
