import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import axios from "axios";
import theme from "@/styles/theme";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}
