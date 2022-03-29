import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/userpage"><a><button shadow color="gradient" auto>Login</button></a></Link>
    </>
  );
}
