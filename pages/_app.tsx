import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
