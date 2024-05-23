import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Layout } from "./layout/layout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useRouter } from "next/router";

export function App({ Component, pageProps }: any) {
  const router = useRouter();

  const AppComponent =
    router.pathname === "/404" ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Head>
          <title>Movies Search</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/Logo.svg" />
        </Head>
        {AppComponent}
      </MantineProvider>
    </Provider>
  );
}
