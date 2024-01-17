import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../styles/Shared.module.css";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Colin Harris</title>
      <meta name="description" content="Software engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout classNames="max-w-7xl">
      <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-22 min-h-[80vh] w-full">
        <div className="max-w-[30rem] flex flex-col gap-2 py-10 px-12">
          <h1 className="break-words fancy-font font-bold text-5xl border-b-blue border-b-2 border-rounded">
            Colin Harris
          </h1>
          <h2 className=" text-2xl">
            Software engineer with{" "}
            <Link
              className="text-[#f45d48]"
              href="https://www.gusto.com"
              target="_blank"
            >
              Gusto
            </Link>
          </h2>
          <br />
          <h3 className="break-words text-lg">
            I work as a full-stack growth engineer at Gusto, working mostly with
            Ruby on Rails and React. I&apos;ve been building apps since 2015 and
            love piecing together the legos of full-stack development.
          </h3>
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <Image
            alt="Colin Harris standing on the beach with the Golden Gate Bridge in the background."
            className="rounded-md"
            height={4493 * 0.14}
            src="/images/me.jpg"
            width={2995 * 0.14}
          />
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
