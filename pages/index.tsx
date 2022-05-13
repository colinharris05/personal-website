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
      <div className="flex flex-col md:flex-row items-center justify-around gap-22 min-h-[80vh] w-full">
        <div className="max-w-[30rem] flex flex-col gap-2 py-3">
          <h1 className="break-words fancy-font font-bold text-5xl">
            Colin Harris
          </h1>
          <h2 className=" text-2xl">
            Software engineer with{" "}
            <Link href="https://www.gusto.com">
              <a className="text-[#f45d48]" target="_blank">
                Gusto.
              </a>
            </Link>
          </h2>
          <br />
          <h3 className="break-words text-lg md:pr-20 pr-0 pb-8">
            I work as a growth engineer at Gusto. I&apos;ve been building apps
            since 2015 and love working with Ruby on Rails and React.
          </h3>
        </div>
        <div className="flex flex-col items-end justify-center gap-1">
          <Image
            alt="Standing in front of a hazy Los Angeles"
            className="rounded-md"
            height={4032 * 0.14}
            src="/images/portrait.png"
            width={3024 * 0.14}
          />
          <span className="text-sm text-slate-400 pr-1">
            Hike above a very hazy LA.
          </span>
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
