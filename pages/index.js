import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joke of the Day</title>
        <meta name="description" content="A website that tells you a joke" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Joke of the day
        </h1>

      </main>
    </div>
  )
}
