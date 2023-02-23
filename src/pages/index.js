import Head from 'next/head';
import { Budget } from './budget';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Gestion de budget familial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Budget />
    </div>
  );
}
