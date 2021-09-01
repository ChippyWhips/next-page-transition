import { gsap } from "gsap/dist/gsap";

const revealPage = () => {
  gsap.to(document.body, { opacity: 1, duration: 0.4, clearProps: "opacity" });
};

export default revealPage;
