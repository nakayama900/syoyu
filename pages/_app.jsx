import React from 'react';
import Head from 'next/head';
import { CssBaseline } from '@nextui-org/react';
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js + MongoDB App</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
