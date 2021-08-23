import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./CustomLink.module.scss";

const CustomLink = ({ children, href }) => {
  const router = useRouter();

  // navigate function using next router.
  const navigate = () => router.push(href);

  const handleClick = (e) => {
    // preventing default on direct <a> child inside of next/link prevents router navigation.
    e.preventDefault();

    // whatever page transition you fancy.
    const main = document.getElementById("main");
    gsap.to(main, { opacity: 0, duration: 0.4, onComplete: navigate });
  };

  return (
    <Link href={href}>
      <a className={styles.link} onClick={handleClick}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
