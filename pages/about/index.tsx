import Head from "next/head";
import Link from "next/link";
import Main from "../../components/main";
import sharedStyles from "../../styles/Shared.module.css";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Colin Harris</title>
        <meta name="description" content="Software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={sharedStyles.container}>
        <Main>
          <p>Hello from about!</p>
        </Main>
      </div>
    </>
  );
};

export default About;
