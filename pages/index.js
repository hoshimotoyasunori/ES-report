import { useCallback, useEffect, useState } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Arrival from '../components/form/arrival'
import Report from '../components/form/report'
import Comment from '../components/form/comment'

import styles from '../styles/home.module.css'

function Home() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div>
          <Report />
        </div>
        <div>
          <Arrival />
        </div>
        <div>
          <Comment />
        </div>
      </main>
      <Footer />
    </>
    
  )
}

export default Home
