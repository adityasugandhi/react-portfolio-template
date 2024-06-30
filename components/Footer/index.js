import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  const calendarLink = 'https://outlook.office.com/bookwithme/user/9add25e1a57b41728c50fff069446682@fsu.edu?anonymous&ep=plink';

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 pl-10 mob:pl-2">
        <div>

          <div className="mt-5">
            <h2 className="mob:text-2xl flex justify-center underline underline-offset-5 mob:pl-2 text-3xl tablet:text-6xl  laptop:text-6xl laptopl:text-8xl text-bold">
             Hire Me!
            </h2>
            <div className="flex justify-center p-2">
            <Button className="underline" type="primary" onClick={() => window.location.href = calendarLink}>
              <h1>Schedule a meeting</h1>
            </Button>
            </div>

            <div className="mt-5">
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
