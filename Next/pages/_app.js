import "../global.css";
import { NextUIProvider } from "@nextui-org/react";
import { DataContextProvider } from "../store/data-store";

import Layout1 from "../components/layout1";
import Layout2 from "../components/layout2";

const layouts = {
  L1: Layout1,
  L2: Layout2,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || "L1";

  return (
    <NextUIProvider>
      <DataContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default MyApp
