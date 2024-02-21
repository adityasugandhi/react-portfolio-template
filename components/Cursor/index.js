import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  const getCustomColor = () => {
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "#000";
    }
  };

  useEffect(() => {
    setMount(true);
    console.log("mount");
  }, []);

  return (
    <>
      {mount && (
        <AnimatedCursor
          innerSize={12}
          outerSize={20}
          color={getCustomColor()}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      )}
    </>
  );
};

export default Cursor;
