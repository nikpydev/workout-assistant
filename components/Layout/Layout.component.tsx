import React, { FC, Fragment } from 'react';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';
import Head from 'next/head';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Workout Assistant Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
