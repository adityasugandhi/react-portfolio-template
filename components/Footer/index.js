import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const CallButton = () => {
  const phoneNumber = '4485006857'; 

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Button type="primary" onClick={handleCallButtonClick}>
      Schedule a call
    </Button>
  );
};

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <CallButton />
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Software Engineer{" "}
        <Link href="stranzersweb.netlify.app">
          <a className="underline underline-offset-1">Aditya Sugandhi</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
