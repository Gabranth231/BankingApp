import Head from 'next/head'
import Users from '../components/Users';

export default function userpage() {
  return (
    <>
      <Head>
        <title>User Account</title>
      </Head>
      <Users />
    </>
  )
}
