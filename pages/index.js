import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Image from 'next/image';
import { cn } from "../utils/cn";
import CountdownTimer from '../components/CountDown/countdown.js';
import { useTheme } from "next-themes";
import { TypewriterEffect } from "../components/ui/typewrite-effect.tsx";
// import Cursor from "../components/Cursor";
import { SparklesCore } from "../components/ui/sparkles";
// Local Data
import data from "../data/portfolio.json";
import { HoverEffect } from "../components/ui/card-hover-effect.tsx";
import dynamic from "next/dynamic";
import Typewriter from "../components/ui/typewriiter.js";
import { TracingBeam } from '../components/ui/tracingbeam.tsx';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const { resolvedTheme } = useTheme();

  const color = resolvedTheme === "dark" ? "#fff" : "#000";

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading delay (e.g., for theme initialization)
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 100); // Add a slight delay to ensure the class is added correctly
    }, 2000); // Adjust the delay as needed
  }, []);

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    if (!isLoading) {
      stagger(
        [textOne.current, textTwo.current, textThree.current, textFour.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Image
            className="revolving"
            src="/logo/Website-logo.png"
            width={500}
            height={500}
            alt="Logo"
          />
        </div>
      ) : (
        <div className= "opacity-0 animate-fade-in">
          <TracingBeam className="px-2 mob:px-0 ">
            <Head>
              <title>{data.name}</title>
              <meta name="description" content={data.content} />
            </Head>
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="fixed inset-0 z-[-10] pointer-events-none"
              particleColor={color}
            />
            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>
            <div className="m-10 mob:my-1 mob:-ml-2">
              <Header
                handleWorkScroll={handleWorkScroll}
                handleAboutScroll={handleAboutScroll}
              />
              <div className="laptop:mt-20 mt-10">
                <div className="mt-5">
                  <h1
                    ref={textOne}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                  >
                    {data.headerTaglineOne}
                  </h1>
                  <h1
                    ref={textTwo}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                  >
                    {data.headerTaglineTwo}
                  </h1>
                  <h1
                    ref={textThree}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                  >
                    <Typewriter texts={data.headerTaglineThree} delay={250} />
                    <span className="m-3">👨🏻‍💻</span>
                  </h1>
                  <h1
                    ref={textFour}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                  >
                    {data.headerTaglineFour}
                  </h1>
                </div>
                <Socials className="pr-2 mt-2 laptop:mt-5" />
              </div>
              <CountdownTimer targetDate={'2024-09-22T23:59:59'} />
              <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
                <h1 className="text-4xl text-bold">Projects</h1>
                <HoverEffect items={data.projects} />
              </div>
              <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
                <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
                <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                  {data.services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      name={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
              {process.env.NODE_ENV === "development" && (
                <div className="fixed bottom-5 right-5">
                  <Link href="/edit">
                    <Button type="primary">Edit Data</Button>
                  </Link>
                </div>
              )}
              <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
                <h1 className="tablet:m-10 text-4xl text-bold">About</h1>
                <p className="tablet:m-10 text-justify mt-2 text-xl laptop:text-3xl w-full laptop:w-5/5">
                  {data.aboutpara}
                </p>
              </div>
              <Footer />
            </div>
          </TracingBeam>
        </div>
      )}
    </>
  );
}
