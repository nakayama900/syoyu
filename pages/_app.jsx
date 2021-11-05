import React from 'react';
import Head from 'next/head';
import { CssBaseline } from '@nextui-org/react';
import Layout from '@/components/layout';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Head>
          <title>Next.js + MongoDB App</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
