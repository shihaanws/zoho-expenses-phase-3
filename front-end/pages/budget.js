import AddBudget from "../components/AddBudget";
import InputBudget from "../components/InputBudget";
import Head from "next/head";

export default function addbudget() {
  return (
    <div>
      <Head>
        <title>New Budget |Budgets | Zoho Expense</title>
      </Head>

      <InputBudget />
      <AddBudget />
    </div>
  );
}
