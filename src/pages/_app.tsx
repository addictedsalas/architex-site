import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import FontLoader from "../components/layout/FontLoader";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <FontLoader />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
