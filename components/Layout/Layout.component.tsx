import React, { FC, Fragment, useState } from 'react';
// import Navbar from '../Navbar/Navbar.component';
import Sidebar from '../Sidebar/Sidebar.component';
import Footer from '../Footer/Footer.component';
import Head from 'next/head';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Head>
        <title>Workout Assistant</title>
        <meta name="description" content="Workout Assistant Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <Sidebar
        isNavbarVisible={isNavbarVisible}
        toggleNavbarVisibility={toggleNavbarVisibility}
      />

      <main className={styles.main}>{children}</main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
