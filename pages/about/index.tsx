import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import Layout from "../../components/layout";

const About: NextPage = () => (
  <>
    <Head>
      <title>About - Colin Harris</title>
      <meta name="description" content="Software engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout classNames="min-h-[80vh]">
      <div className="flex flex-col md:flex-row gap-5 pt-5">
        <p className="text-lg font-bold pr-8">
          Hey, it&apos;s Colin. This is{" "}
          <span className="text-xs">technically</span> my dog Koda. We spend a
          lot of time together solving problems and going on short walks.
          Sometimes we play a round of disc golf, but when we&apos;re not
          together I&apos;m probably out running.
        </p>
        <Image
          alt="Koda, a cream colored shiba inu dog."
          className="rounded-md"
          height={4032 * 0.3}
          src="/images/koda.jpg"
          width={3024 * 0.3}
        />
      </div>
    </Layout>
  </>
);

export default About;
