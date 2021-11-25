

import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
import Webtab from "../components/Webtab";
function webtab() {
  return (
    <div>
      <Head>
        <title>Web tab | Settings | Zoho Expense </title>
      </Head>
     <Layout />
      <Webtab />
    </div>
  );
}

export default withAuth(webtab);
