import Head from 'next/head'
import React from 'react'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'

export const MainLayout = ({ children}) => {
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
