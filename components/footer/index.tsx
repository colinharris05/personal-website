import Link from "next/link";
import React from "react";

const LINKS = [
  {
    href: "https://github.com/colinharris05",
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/colinharris05/",
    text: "LinkedIn",
  },
];

const Footer = () => (
  <div className="h-[8vh] flex justify-end items-end px-16 py-5 gap-5 border-t-2 border-t-slate-100 mt-2">
    {LINKS.map(({ href, text }) => (
      <div className="text-slate-600" key={href}>
        <span>
          <Link href={href} target="_blank">
            {text}
          </Link>
        </span>
      </div>
    ))}
  </div>
);

export default Footer;
