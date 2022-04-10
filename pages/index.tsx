import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../styles/Shared.module.css";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Colin Harris</title>
      <meta name="description" content="Software engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={sharedStyles.container}>
      <main className={sharedStyles.main}>
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center pb-10">
            <h1 className={styles.title}>Software Engineer</h1>
          </div>

          <Image
            alt="Self portrait"
            className="rounded-lg"
            height={300}
            src="/images/portrait.jpg"
            width={450}
          />
        </div>

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
  </>
);

export default Home;
