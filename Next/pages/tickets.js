import Tickets from '../components/Tickets';
import Head from 'next/head'

export default function TicketsPage() {
  TicketsPage.Layout = "L2";

  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Tickets />
    </>
  )
}
