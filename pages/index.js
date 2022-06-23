import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single')
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }, [])
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
        <p>{ joke || '' }</p>

      </main>
    </div>
  )
}
