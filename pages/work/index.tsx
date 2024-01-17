import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import Layout from "../../components/layout";

const JOBS = [
  {
    company: "Gusto",
    description: "Full stack Growth engineering",
    endDate: "Present",
    href: "https://www.gusto.com",
    startDate: "Aug 2017",
  },
  {
    company: "Hardin Design & Development",
    description: "Full stack web development",
    endDate: "May 2017",
    href: "http://www.hardindd.com",
    startDate: "Sep 2016",
  },
  {
    company: "Meta (Facebook)",
    description: "Full stack Growth engineering",
    endDate: "Aug 2016",
    href: "https://about.facebook.com/meta",
    startDate: "May 2016",
  },
  {
    company: "National Decision Support Company",
    description: "Software engineering intern",
    endDate: "May 2016",
    href: "",
    startDate: "Feb 2016",
  },
  {
    company: "Dell",
    description: "Software engineering intern",
    endDate: "Jan 2016",
    href: "https://www.gusto.com",
    startDate: "Jun 2015",
  },
  {
    company: "Maverick Software Consulting",
    description: "Software engineering intern",
    endDate: "Aug 2014",
    href: "https://www.mavericksoftware.com",
    startDate: "May 2014",
  },
];

const Work: NextPage = () => (
  <>
    <Head>
      <title>Work - Colin Harris</title>
      <meta name="description" content="Software engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Layout>
        <div className="flex flex-col gap-4 mb-10">
          {JOBS.map(
            ({ company, description, endDate, href, startDate }, index) => (
              <Link
                className="hover:bg-slate-100 px-4 py-6 rounded"
                target="_blank"
                href={href}
                key={company}
              >
                <div className="flex items-center justify-between pb-3">
                  <h3
                    className={`font-bold text-2xl mr-4 ${
                      index === 0
                        ? "text-[#f45d48] border-b-[#f45d48] border-b-2 pb-1"
                        : ""
                    }`}
                    style={{ color: index === 0 ? "" : "" }}
                  >
                    {company}
                  </h3>
                  <span>
                    {startDate} - {endDate}
                  </span>
                </div>
                <p>{description}</p>
              </Link>
            )
          )}
        </div>
      </Layout>
    </div>
  </>
);

export default Work;
