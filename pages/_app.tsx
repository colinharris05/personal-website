import "../styles/globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
