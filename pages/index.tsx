import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../styles/Shared.module.css";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Colin Harris</title>
      <meta name="description" content="Software engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={sharedStyles.container}>
      <main className=" flex items-center justify-center min-h-[80vh]">
        <div className="flex flex-row-reverse flex-wrap justify-around gap-6">
          <Image
            alt="Self portrait"
            className="rounded-lg"
            height={255}
            src="/images/portrait.jpg"
            width={382.5}
          />
          <div className="flex flex-col justify-center mb-8 mt-8 max-w-[25rem]">
            <h1 className="break-words font-bold text-3xl pb-5">
              Growth engineering{" "}
              <div>
                with{" "}
                <Link href="https://www.gusto.com">
                  <a className="text-[#f45d48]" target="_blank">
                    Gusto.
                  </a>
                </Link>
              </div>
            </h1>
            <h3 className="break-words text-lg">
              I&apos;m Colin Harris, a software engineer living in the Denver,
              CO area. I focus on full-stack web development, mostly with Rails
              and ReactJS. I love building things that can make a difference.
            </h3>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Home;
