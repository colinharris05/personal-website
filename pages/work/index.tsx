import Head from "next/head";
import Link from "next/link";
import Main from "../../components/main";
import sharedStyles from "../../styles/Shared.module.css";
import type { NextPage } from "next";

const JOBS = [
  {
    company: "Gusto",
    description: "Growth engineering",
    endDate: "Present",
    href: "https://www.gusto.com",
    startDate: "Aug 2017",
  },
  {
    company: "Hardin Design & Development",
    description: "Software engineer",
    endDate: "May 2017",
    href: "http://www.hardindd.com",
    startDate: "Sep 2016",
  },
  {
    company: "Meta (Facebook)",
    description: "Software engineering intern on Growth Ads",
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
    endDate: "Present",
    href: "https://www.gusto.com",
    startDate: "2017",
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
        <div className={sharedStyles.grid}>
          {JOBS.map(({ company, description, endDate, href, startDate }) => (
            <div key={company} className={sharedStyles.card}>
              <h2 className="text-xl">
                <Link href={href}>
                  <a target="_blank">{company}</a>
                </Link>
              </h2>
              <p>
                {startDate} - {endDate}
              </p>
              <br />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Main>
    </div>
  </>
);

export default Work;
