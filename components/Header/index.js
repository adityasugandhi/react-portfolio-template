import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { resolvedTheme, theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 0);
    };
  
    // Check if the window object is defined (for server-side rendering)
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <Popover className="block tablet:hidden mt-5${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'}`">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      className="h-6"
                      src={`/images/${
                        resolvedTheme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      width={24}
                      height={24}
                      alt="sun-moon-icon"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${
                      !open
                        ? resolvedTheme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : resolvedTheme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    height={20}
                    width={20}
                    alt="menu-cancel-svg"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                resolvedTheme === "dark" ? "bg-slate-900" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:as22cq@fsu.edu", "_blank")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:as22cq@fsu.edu")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
       className={`mt-10 hidden flex-row items-center justify-between sticky ${
        resolvedTheme === "light" && "bg-black" && "border-radius-2xl"
      } dark:text-white top-0 z-10 tablet:flex ${isScrolled ? 'bg-opacity-50' : 'bg-opacity-100'}`}
    >
      
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:as22cq@fsu.edu")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  height={24}
                  width={24}
                  alt="moon-sun-svg"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => router.push("/resume")}>
              Contact
            </Button>
            <Button onClick={() => window.open("mailto:as22cq@fsu.edu")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${resolvedTheme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="moon-sun-svg"
                  height={24}
                  width={24}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
