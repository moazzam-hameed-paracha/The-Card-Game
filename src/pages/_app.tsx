import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "@src/styles/globals.scss";
import { CustomHeader } from "@src/components/common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Card Game</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CustomHeader />

      <Component {...pageProps} />
    </>
  );
}
