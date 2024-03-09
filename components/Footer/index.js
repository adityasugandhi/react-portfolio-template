import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  const calendarLink = 'https://outlook.office.com/bookwithme/user/9add25e1a57b41728c50fff069446682@fsu.edu?anonymous&ep=plink';

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 pl-10">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary" onClick={() => window.location.href = calendarLink}>
              Schedule a meeting
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Software Engineer{" "}
        <Link href="https://adityasugandhi.com">
          <div className="underline underline-offset-1">Aditya Sugandhi</div>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
