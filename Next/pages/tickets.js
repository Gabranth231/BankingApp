import Tickets from '../components/Tickets';
import Head from 'next/head'
import Layout from '../components/layout2';
export default function TicketsPage() {

  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Tickets />
    </>
  )
}
TicketsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
