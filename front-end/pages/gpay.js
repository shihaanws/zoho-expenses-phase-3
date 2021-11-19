
import Gpay from "../components/Gpay";
import Head from "next/head";

function home() {
  return (
    <div>
      <Head>
        <title>payment Page </title>
      </Head>

      <Gpay />
    </div>
  );
}

export default (home);
