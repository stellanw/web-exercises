import GlobalStyle from "../styles";
import { useSWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const { mutate } = useSWRConfig();
  // mutate(key, data, options);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
