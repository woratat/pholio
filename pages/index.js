import Head from 'next/head';
import { getSession } from 'next-auth/client'

import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session }) {
  if(!session) return <Login/>;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Pholio</title>
      </Head>

      <Header/>

      <main className="flex">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession(context);
  console.log(session);

  return {
    props: {
      session
    }
  }
}