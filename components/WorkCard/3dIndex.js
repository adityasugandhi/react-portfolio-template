"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo({ img, name, description, onClick, youtubeId }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
    
    return (
        <div onClick={onClick}>
            <CardContainer
                className={`inter-var`}
            >
                <CardBody className={`relative group/card border-black border ${resolvedTheme === 'dark' && mounted ? 'dark:text-white' : 'text-black'} ${mounted && resolvedTheme === 'dark' ? 'dark:hover:bg-slate-900' : 'hover:bg-slate-50'} ${resolvedTheme === 'dark' && mounted ? 'dark' : ''}:hover:shadow-2xl ${resolvedTheme === 'dark' && mounted ? 'dark' : ''}:hover:shadow-emerald-500/[0.1] ${resolvedTheme === 'dark' && mounted ? 'dark' : ''}:bg-transparent ${resolvedTheme === 'dark' && mounted ? 'dark' : ''}:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6`}
                >
                    <CardItem
                        translateZ="50"
                        className={`text-2xl font-bold`}
                    >
                        {name}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className={`text-l mt-2 ${
                            mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-black'
                        } opacity-50 hover:opacity-100 transition-all ease-in-out duration-300`}
                    >
                        {description}
                    </CardItem>
                    <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className="w-full mt-4"
                    >
                        {youtubeId ? (
                            // Embed YouTube video using iframe
                            console.log("YouTube video ID:", youtubeId),
                            <iframe className="rounded-xl"
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            // Display image if no YouTube video
                            <Image
                                src={img}
                                height={1000}
                                width={1000}
                                priority={true}
                                className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        )}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    );
}
