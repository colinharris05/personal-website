import Link from "next/link";
import React from "react";

const LINKS = [
  {
    href: "https://github.com/colinharris05",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/colinharris05/",
    text: "LinkedIn",
  },
];

const Footer = () => (
  <div className="h-[10vh] flex justify-start items-end px-16 py-5 gap-5">
    {LINKS.map(({ href, text }, index) => (
      <>
        <span>
          <Link href={href}>
            <a target="_blank">{text}</a>
          </Link>
        </span>
        {index !== LINKS.length - 1 && <span>|</span>}
      </>
    ))}
  </div>
);

export default Footer;
