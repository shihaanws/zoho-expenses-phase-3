import React, { useState } from 'react'
import Layout from "../components/Layout";
import Emailtemplate from '../components/Emailtemplate';
import withAuth from "../auth/prodectedroutes";

 function emailtemplate() {
    return (
      <div>
      <Layout />
      <Emailtemplate/>
</div>
    )
}
export default withAuth(emailtemplate);
