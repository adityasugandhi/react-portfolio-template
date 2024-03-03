import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const bulletsArray = Array.isArray(bullets) ? bullets : bullets.split(",");

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-5/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsArray && bulletsArray.length > 0 && (
          <ul className="list-disc pl-5">
            {bulletsArray.map((bullet, index) => (
              <li key={index} className=" text-justify w-full p-1 m-0 text-md mob:text-sm my-1 opacity-50 hover:opacity-80 ease-in-out transition-opacity duration-300">
                {bullet.trim()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
