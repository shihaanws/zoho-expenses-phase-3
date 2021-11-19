export const addCustomer = async(customer) => {
    return await fetch("http://localhost:8080/api/customer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  export const deleteCus = async (_id) => {
   
    try {
      const response = await fetch(`http://localhost:8080/api/customerdelete/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  
  export const getId = (user) => {
    // let email = user.email;
    return fetch(`http://localhost:8080/api/customer/${user}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const postMail = async(content,email) =>{
    return await fetch(`http://localhost:8080/sendmail/${email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getCus = (_id) => {
    // let email = user.email;
    return fetch(`http://localhost:8080/api/customers/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  export const getItem = (_id) => {
    return fetch(`http://localhost:8080/itemall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  export const addItem = async(items) => {
    return await fetch("http://localhost:8080/items", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  
  
  export const getItemId = (_id) => {
    return fetch(`http://localhost:8080/items/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const deleteItem = async (_id) => {
   
    try {
      const response = await fetch(`http://localhost:8080/items/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  
  export const getEstiID = (_id) => {
    return fetch(`http://localhost:8080/api/allestimates/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  
  
  
  
  export const getSingleEsti = (_id) => {
    return fetch(`http://localhost:8080/api/estimates/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  // /salesall/:userid
  
  
  export const getSalesUser = (_id) => {
    return fetch(`http://localhost:8080/salesall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getSingleSales = (_id) => {
    return fetch(`http://localhost:8080/sales/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  // /sales/:id
  
  // /invoicesall/:useid
  
  export const getInvoiceUser = (_id) => {
    return fetch(`http://localhost:8080/invoicesall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  // /invoices/
  
  
  
  
  export const getUserInvoice = (_id) => {
    return fetch(`http://localhost:8080/invoices/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  
  export const getUserventor = (_id) => {
    return fetch(`http://localhost:8080/vendorsall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  export const addVendor = async(ventor) => {
    return await fetch("http://localhost:8080/vendors", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ventor)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getcusBusale = (name) => {
    return fetch(`http://localhost:8080/api/customersale/${name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  export const postSaleEmail = async(content,email) => {
    return await fetch(`http://localhost:8080/sendsalemail/${email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  // /vendors/:id
  
  
  export const getven = (_id) => {
    return fetch(`http://localhost:8080/vendorsall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
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
  
  // /payments
  
  
  export const postParRec = async(content) => {
    return await fetch("http://localhost:8080/payments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  // /paymentall/:userid
  
  export const getPayRec = (_id) => {
    return fetch(`http://localhost:8080/paymentall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  // /pays
  
  
  export const postpaymade = async(content) => {
    return await fetch("http://localhost:8080/pays", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  // /payall/:userid
  
  export const getPaymade = (_id) => {
    return fetch(`http://localhost:8080/payall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  export const getpayresbyid = (_id) => {
    return fetch(`http://localhost:8080/payments/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getPaymadebyuser = (_id) => {
    return fetch(`http://localhost:8080/pays/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const getventorByUser = (_id) => {
    return fetch(`http://localhost:8080/vendors/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  
  // /purchasesall/:userid
  
  
  export const getPurchasebyuser = (_id) => {
    return fetch(`http://localhost:8080/purchasesall/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  