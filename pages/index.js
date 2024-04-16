import { useRef,useState,useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";

import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { cn } from "../utils/cn";

import {useTheme} from "next-themes";
import { TypewriterEffect } from "../components/ui/typewrite-effect.tsx"
// import Cursor from "../components/Cursor";
import { SparklesCore } from "../components/ui/sparkles";
// Local Data
import data from "../data/portfolio.json";
import { HoverEffect} from "../components/ui/card-hover-effect.tsx";
import dynamic from "next/dynamic";
import Typewriter from "../components/ui/typewriiter.js";



export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  let { resolvedTheme } = useTheme();

  const color = resolvedTheme === "dark" ? "#fff" : "#000";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Theme initialization
    setIsLoading(false); // Simulate theme initialization completion
  }, []); // Empty dependency array ensures this runs only once
  // Handling Scroll
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
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div>
    
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.content} />
       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDK9138DFD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-LDK9138DFD');
        </script>
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

      <div className="container mx-auto mb-10">
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
              <Typewriter texts = { data.headerTaglineThree} delay={250}/>
              <span className="m-3">👨🏻‍💻</span>
              {/* <TypewriterEffect words = {data.headerTaglineThree}/> */}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          {!isLoading && <Socials className="pr-2 mt-2 laptop:mt-5" />}
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl text-bold">Projects</h1>
          <HoverEffect items={data.projects}/>
          {/* <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
  {data.projects.map((project) => (
    <ThreeDCardDemo
      key={project.id}
      img={project.youtubeId ? undefined : project.imageSrc} // Only include img if youtubeId is not available
      name={project.title}
      description={project.description}
      youtubeId={project.youtubeId} // Assuming youtubeId is a prop expected by ThreeDCardDemo
      onClick={() => window.open(project.url)}
    />
  ))}
</div> */}
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
        {/* This button should not go into production */}
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
    </div>
  );
}
