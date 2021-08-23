import { useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const revealPage = () => {
      const main = document.getElementById("main");
      gsap.to(main, { opacity: 1, duration: 0.4, clearProps: "opacity" });
    };

    router.events.on("routeChangeComplete", revealPage);

    return () => {
      router.events.off("routeChangeComplete", revealPage);
    };
  }, []);

  return (
    <main id="main">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
