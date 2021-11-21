import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
import User from "../components/User"
function home() {
  return (
    <div>
      <Head>
        <title>User Page </title>
      </Head>
     <Layout />
      <User />
    </div>
  );
}

export default withAuth(home);
