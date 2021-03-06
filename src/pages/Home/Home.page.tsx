import Card from '@/components/Card/Card.component'
import Head from 'next/head'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
            link="https://nextjs.org/docs"
          />
          <Card
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
            link="https://nextjs.org/learn"
          />
          <Card
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
            link="https://nextjs.org/examples"
          />
          <Card
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </div>
      </main>
    </div>
  )
}

Home.displayName = 'Home'
