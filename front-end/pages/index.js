import Header from "../components/Header";
import Middle from "../components/Middle";
import Footer from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {
  useEffect(() => {
    axios("http://localhost:8080/", {
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <Middle />
      <Footer />
    </>
  );
}
