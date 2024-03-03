"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function GridBento({ img, name, description, onClick, youtubeId }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div onClick={onClick}>
      <BentoGrid className={`inter-var`}>
        <BentoGridItem
          translateZ="50"
          className={`text-2xl font-bold`}
        >
          {name}
        </BentoGridItem>
        <BentoGridItem
          as="p"
          translateZ="60"
          className={`text-l mt-2 ${
            mounted && resolvedTheme === "dark" ? "text-white" : "text-black"
          } opacity-50 hover:opacity-100 transition-all ease-in-out duration-300`}
        >
          {description}
        </BentoGridItem>
        <BentoGridItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          {youtubeId ? (
            // Embed YouTube video using iframe
            console.log("YouTube video ID:", youtubeId),
            <iframe
              className="rounded-xl"
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
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
