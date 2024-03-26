import React from "react";
import Button from "../Button";
import Image from 'next/image';
import yourData from "../../data/portfolio.json";
import {useTheme} from "next-themes";

const Socials = ({ className }) => {
  let { resolvedTheme } = useTheme();
  console.log(resolvedTheme,"socials")
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <Image 
            src={resolvedTheme === 'dark' ? social.logo_dark : social.logo} 
            height={30} 
            width={30} 
            alt={social.title} 
          />
        </Button>
      ))}
    </div>
  );
};

export default Socials;
