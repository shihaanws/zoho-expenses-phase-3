import React from 'react'
import Layout from "../components/Layout";
import Head from "next/head";
import Dashboard from '../components/Dashboard';
export default function dashboard() {
    return (
        <div>
              <Layout />
              <Dashboard/>
              <Head>
        <title>Dashboard | Zoho Expenses</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
        </div>
    )
}
