import Employees from '../components/Employees';
import Head from 'next/head'

export default function EmployeesPage() {
  EmployeesPage.Layout = "L1";

  return (
    <>
      <Head>
        <title>The Employees</title>
      </Head>
      <Employees />
    </>
  )
}
