import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colin Harris</title>
        <meta name="description" content="Software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          alt="Colin Harris portrait"
          height={400}
          src="/images/colinharris.jpg"
          width={600}
        />

        <h1 className={styles.title}>Colin Harris</h1>
        <hr className={styles.titleSpacer} />
        <h2 className={styles.subtitle}>Software Engineer</h2>

        <p className={styles.description}>
          Growth engineering with{" "}
          <Link href="https://www.gusto.com">
            <a target="_blank">Gusto</a>
          </Link>
          .
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
};

export default Home;
