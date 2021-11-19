import { isAutheticated } from "../auth/Auth";

export const getUser = (email) => {
  const { token } = isAutheticated();
  console.log(token);
  return fetch(`http://localhost:8080/api/tripsofuser/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getOrg = async (org_name) => {
  const { token } = await isAutheticated();
  // let email = user.email;
  console.log(token);
  return await fetch(`http://localhost:8080/api/getallusers/${org_name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getid = async (id) => {
  const { token } = await isAutheticated();
  // let email = user.email;
  console.log(token);
  return await fetch(`http://localhost:8080/api/getuser/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = async (updatedData, id) => {
  const { token } = isAutheticated();
  return await fetch(`http://localhost:8080/api/updateuser/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
