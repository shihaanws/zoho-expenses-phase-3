import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
import User from "../components/User"
function user() {
  return (
    <div>
      <Head>
        <title>Trips Page </title>
      </Head>
      <Layout backgroundTab="admintrip" />
      <User />
    </div>
  );
}

export default withAuth(user);
