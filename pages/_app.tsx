import "../styles/globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&family=Nunito:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
