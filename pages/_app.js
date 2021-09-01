import { useEffect } from "react";
import { useRouter } from "next/router";
import { revealPage } from "../components/Animations";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", revealPage);
    return () => {
      router.events.off("routeChangeComplete", revealPage);
    };
  }, [router]);

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
