import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@dr/shared-components';

import 'node_modules/bootstrap/scss/bootstrap.scss';
import '../scss/style.scss';
// import 'node_modules/bootstrap-icons/font/bootstrap-icons.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to test app!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
