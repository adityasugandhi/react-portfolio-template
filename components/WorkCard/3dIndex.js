"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme,setTheme } from "next-themes";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo({ img, name, description, onClick }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
        setMounted(true);
        return () => {
          // Cleanup code if needed
          setMounted(false);
        };
      }, []);
    
    
    return (
      <CardContainer
        className={`inter-var ${theme === 'dark' ? 'dark' : ''}`}
        onClick={onClick}
      >
        <CardBody className={`relative group/card border-black border ${theme === 'dark' ? 'dark:text-white' : 'text-black'} ${mounted && theme === 'dark' ? 'dark:hover:bg-slate-900' : 'hover:bg-slate-50'} ${theme === 'dark' ? 'dark' : ''}:hover:shadow-2xl ${theme === 'dark' ? 'dark' : ''}:hover:shadow-emerald-500/[0.1] ${theme === 'dark' ? 'dark' : ''}:bg-transparent ${theme === 'dark' ? 'dark' : ''}:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6`}
      >
        <CardItem
          translateZ="50"
          className={`text-xl font-bold`}
        >
          {name}
        </CardItem>
        <CardItem
      as="p"
      translateZ="60"
      className={`text-sm mt-2 ${
        mounted && theme === 'dark' ? 'dark:text-neutral-300' : 'text-neutral-800'
      } opacity-50 transition-all ease-in-out duration-300`}
    >
      {description}
    </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            priority={true}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    );
  }