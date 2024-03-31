import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && resolvedTheme === "dark" ? "hover:bg-slate-900" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl laptop:text-3xl mob:text-2xl">{name ? name : "Heading"}</h1>
      <p className="text-justify t-5 opacity-30 text-2xl laptop:text-xl mob:text-sm hover:opacity-100">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;