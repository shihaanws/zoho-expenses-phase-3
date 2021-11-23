import React from "react";
import withAuth from "../auth/prodectedroutes";
import Head from "next/head";
import Advances from "../components/Advances";
import Layout from "../components/Layout" ;

const UserAdvances = () => {
  return (
    <>
    <Layout />
      <Advances />
      <Head>
        <title>Advances | Zoho Expenses </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(UserAdvances);
