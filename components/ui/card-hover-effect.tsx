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
    url: string;
    imageSrc?: string;
    youtubeId?:string; // Add the optional imageSrc property
  }[];
  className?: string;
}) => {
    
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  console.log("resolvedTheme",resolvedTheme)
  return (
    <div
      className={cn(
        "grid grid-cols-1 tablet:grid-cols-1 mob:grid-cols-1 desktop:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.url || "#"} // Add a fallback or use a default value
          key={item?.url || idx.toString()}
          className="relative group block p-2 h-auto w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className={`absolute inset-0 h-full w-full ${resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-300"} block rounded-3xl`}
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
          <Card theme = {resolvedTheme} {...item} > {/* Assuming a default theme value */}
          <CardTitle theme={resolvedTheme}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
    className,
    id,
    children,
    imageSrc,
    youtubeId,
    theme,
  }: {
    id?: string;
    className?: string;
    children: React.ReactNode;
    imageSrc?: string;
    youtubeId?: string;
    theme: string;
  }) => {
    
    return (
      <div
        className={cn(
          `rounded-2xl h-full w-full p-4 overflow-hidden group-hover:border-slate-600 relative z-20`,
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
        <div className="mb-4 rounded-2xl">
  <YouTube videoId={youtubeId} className="rounded-xl w-auto h-auto" /> {/* Render YouTube video component */}
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
            priority = {true}
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
    <h4 className={cn(`font-bold  laptop:text-3xl mobile:text-xl tracking-wide mt-4`, className)}>
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