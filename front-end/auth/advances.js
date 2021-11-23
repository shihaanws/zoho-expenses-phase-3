export const getAdvances = async (email) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token);
    try {
      const response = await fetch(
        `http://localhost:8080/api/advancesofuser/${email}`,
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
}