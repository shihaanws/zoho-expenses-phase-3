import Layout from "../components/Layout";
import withAuth from "../auth/prodectedroutes";
import Head from "next/head";
import Dashboard from '../components/Dashboard';
function dashboard() {
    return (
        <div>
    <Head>
        <title>Dashboard | Zoho Expenses</title>
      </Head>
              <Layout />
              <Dashboard/>

        </div>
    )
}
export default withAuth(dashboard);