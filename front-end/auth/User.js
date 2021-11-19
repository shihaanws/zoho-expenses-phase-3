
import { isAutheticated } from "../auth/Auth";


export const getUser = (email) => {
  const { token } = isAutheticated();
  console.log(token);
  return fetch(
    `http://localhost:8080/api/tripsofuser/${email}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
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
  return await fetch(
    `http://localhost:8080/api/getallusers/${org_name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
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
  return await fetch(
    `http://localhost:8080/api/getuser/${id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
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
  return await fetch(
    `http://localhost:8080/api/deletetrips/${_id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
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
  return await fetch(`http://localhost:8080/api/${id}`, {
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

export const expenses = async (expense) => {
  const { token } = isAutheticated();
  return await fetch(
    "http://localhost:8080/api/createexpense",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(expense),
    }
  )
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
      `http://localhost:8080/api/expenseofuser/${email}`,
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