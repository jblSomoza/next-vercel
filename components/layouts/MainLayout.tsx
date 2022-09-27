import React from 'react'
import Head from 'next/head'

import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'

interface Props {
  children : JSX.Element | JSX.Element[]
}

export const MainLayout = ({ children } : Props ) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home -  Jhony</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}
