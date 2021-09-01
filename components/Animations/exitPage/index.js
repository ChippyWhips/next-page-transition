import { gsap } from "gsap/dist/gsap";

const exitPage = () => {
  return new Promise((resolve) => {
    const tl = gsap.timeline();
    tl.to(document.body, {
      opacity: 0,
      duration: 0.4,
      onComplete: resolve,
      onCompleteParams: [tl]
    });
  });
};

export default exitPage;
