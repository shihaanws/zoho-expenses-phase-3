import { FaExclamationCircle } from "react-icons/fa";
import { signin, authenticate, isAutheticated } from "../auth/Auth";

export const trips = async (trip, token) => {
<<<<<<< HEAD
  return await fetch(
<<<<<<< HEAD
    "http://localhost:4000/api/createtrip",
=======
    "http://localhost:8080/api/createtrip",
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(trip),
    }
  )
=======
  return await fetch("http://localhost:8080/api/createtrip", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(trip),
  })
>>>>>>> df4a2d9edbfa98d816c557d1f10eaed449065c03
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTrip = (email) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
<<<<<<< HEAD
  return fetch(
<<<<<<< HEAD
    `http://localhost:4000/api/tripsofuser/${email}`,
=======
    `http://localhost:8080/api/tripsofuser/${email}`,
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
=======
  return fetch(`http://localhost:8080/api/tripsofuser/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
>>>>>>> df4a2d9edbfa98d816c557d1f10eaed449065c03
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
<<<<<<< HEAD
  return await fetch(
<<<<<<< HEAD
    `http://localhost:4000/api/alltrips/${org_name}`,
=======
    `http://localhost:8080/api/alltrips/${org_name}`,
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
=======
  return await fetch(`http://localhost:8080/api/alltrips/${org_name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
>>>>>>> df4a2d9edbfa98d816c557d1f10eaed449065c03
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteTrip = async (_id) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
<<<<<<< HEAD
  return await fetch(
<<<<<<< HEAD
    `http://localhost:4000/api/deletetrips/${_id}`,
=======
    `http://localhost:8080/api/deletetrips/${_id}`,
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
=======
  return await fetch(`http://localhost:8080/api/deletetrips/${_id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
>>>>>>> df4a2d9edbfa98d816c557d1f10eaed449065c03
    .then((response) => {
      console.log(response.email);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getId = async (id) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
<<<<<<< HEAD
  return await fetch(`http://localhost:4000/api/${id}`, {
=======
  return await fetch(`http://localhost:8080/api/${id}`, {
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
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

// export const statusChange = (id) => {
//   return await fetch(`/api/updateexpensestatus/${id}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization:`bearer ${token}`
//     },
//     body: JSON.stringify({

//     })
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

export const updateTripStatus = async (updatedData, id) => {
  const { token } = isAutheticated();
  return await fetch(`http://localhost:8080/api/updatetrips/${id}`, {
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

export const expenses = async (expense) => {
  const { token } = isAutheticated();
  return await fetch("http://localhost:8080/api/createexpense", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(expense),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getExpense = async (email) => {
  const { token } = isAutheticated();
  // let email = user.email;
  console.log(token);
  try {
    const response = await fetch(
<<<<<<< HEAD
      `http://localhost:4000/api/expenseofuser/${email}`,
=======
      `http://localhost:8080/api/expenseofuser/${email}`,
>>>>>>> eb5d5c15a7763483022a7d1c1b71a1b60c43ca77
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.email);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
