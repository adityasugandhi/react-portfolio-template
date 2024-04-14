import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";

const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider>
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
};




export default App;
