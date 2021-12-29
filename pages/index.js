import Head from 'next/head';
import Layout from '@/components/Layout';
import Jumbotron from './Jumbotron';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bitgin | Home</title>
      </Head>
      <Jumbotron />
    </Layout>
  );
}
