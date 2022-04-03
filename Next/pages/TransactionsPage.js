import Transactions from '../components/Transactions';
import Head from 'next/head'
import Layout from '../components/layout2';
export default function TransactionsPage() {

  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Transactions />
    </>
  )
}
TransactionsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
