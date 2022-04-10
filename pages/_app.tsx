import "../styles/globals.css";
import Navigation from "../components/navigation";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Navigation />
    <Component {...pageProps} />
  </>
);

export default App;
