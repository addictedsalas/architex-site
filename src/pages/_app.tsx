import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import FontLoader from "../components/layout/FontLoader";
import ScrollToTop from "../components/layout/ScrollToTop";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <FontLoader />
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
};

export default MyApp;
