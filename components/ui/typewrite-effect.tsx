// TypewriterEffect.js

import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../utils/cn";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );

      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
      }, 3000); // Adjust the duration to control how long each set of words is displayed

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, animate, wordsArray]);

  const renderWords = () => {
    const currentWord = wordsArray[currentIndex];
    return (
      <motion.div ref={scope} className={`inline ${className}`}>
        {currentWord.text.map((char, index) => (
          <motion.span
            initial={{}}
            key={`char-${index}`}
            className={cn(
              ` opacity-0 hidden`,
              currentWord.className
            )}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
