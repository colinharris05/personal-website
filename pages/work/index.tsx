import Head from "next/head";
import Link from "next/link";
import Main from "../../components/main";
import sharedStyles from "../../styles/Shared.module.css";
import type { NextPage } from "next";

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
    <div className={sharedStyles.container}>
      <Main>
        <h1 className="text-4xl text-center pt-8 pb-8">Work experience</h1>
        <div className={sharedStyles.grid}>
          {JOBS.map(({ company, description, endDate, href, startDate }) => (
            <Link href={href} key={company}>
              <a target="_blank">
                <div
                  className={`${sharedStyles.card} ${
                    endDate === "Present" ? sharedStyles.presentJob : ""
                  }`}
                >
                  <h3>{company}</h3>
                  <p>
                    {startDate} - {endDate}
                  </p>
                  <p>{description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Main>
    </div>
  </>
);

export default Work;
