import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes"; 
import YouTube from 'react-youtube';
import Button from '@mui/material/Button';
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    description: string;
    url?: string;
    imageSrc?: string;
    youtubeId?: string;
    Docs?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        "grid grid-cols-1 tablet:grid-cols-1 mob:grid-cols-1 desktop:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.url || idx.toString()}
          className="relative group block p-2 h-auto w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`absolute inset-0 h-full w-full ${
                  resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-300"
                } block rounded-3xl`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div>
            {/* Removed the Link component */}
            <Card theme={resolvedTheme} {...item}>
              {/* Assuming a default theme value */}
              <CardTitle theme={resolvedTheme}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="absolute bottom-0 right-0 flex">
      {item.url && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 opacity-75 hover:opacity-100 transition-opacity duration-500 mr-2">Learn More</a>
      )}
      {item.Docs && (
        <a href={item.Docs} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 opacity-75 hover:opacity-100 transition-opacity duration-500">Docs</a>
      )}
    </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageSrc,
  youtubeId,
  theme,
}: {
  className?: string;
  children: React.ReactNode;
  imageSrc?: string;
  youtubeId?: string;
  theme: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-2xl overflow-hidden group-hover:border-slate-600 relative z-20`,
        {
          'bg-black': theme === 'dark',
          'bg-white-100': theme !== 'dark',
          'bg-opacity-50': theme !== 'dark',
        },
        className
      )}
    >
      {youtubeId ? (
        // If youtubeId is provided, render YouTube video
        <div className="relative h-0 pb-9/16">
          <YouTube
            videoId={youtubeId}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      ) : imageSrc ? (
        // If youtubeId is not provided and imageSrc is available, display image
        <div className="mb-4">
          <Image
            src={imageSrc}
            alt=""
            className="w-full h-auto rounded-2xl"
            width={1024}
            height={1024}
            priority={true}
          />
        </div>
      ) : null}
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  theme,
}: {
  className?: string;
  children: React.ReactNode;
  theme: string;
}) => {
    console.log("theme",theme)  
  return (
    <h4 className={cn(`font-bold  laptop:text-3xl tablet:text-2xl   tracking-wide mt-4`, className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
    className,
    children,
    learnMoreLink,
  }: {
    className?: string;
    children: React.ReactNode;
    learnMoreLink?: string;
  }) => {
    return (
      <div className="relative">
        <p
          className={cn(
            "mt-8 text-zinc-40 opacity-25 hover:opacity-100 transition-opacity ease-in-out duration-300 tracking-wide leading-relaxed desktop:text-xl mob:text-md tablet:text-l",
            className
          )}
        >
          {children}
        </p>
        {/* <Button variant="outlined">Learn more</Button> */}
      </div>
    );
  };