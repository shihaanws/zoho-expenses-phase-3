import React, { useState } from 'react'
import Layout from "../components/Layout";
import Emailtemplate from '../components/Emailtemplate'
import Head from "next/head";

export default function emailtemplate() {
    return (
      <div>
      <Layout />
      <Emailtemplate/>
      <Head>
        <title>Email Template | Settings</title>
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      </div>
    )
}
