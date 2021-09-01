import Link from "next/link";
import { useRouter } from "next/router";
import { exitPage } from "../Animations";
import styles from "./CustomLink.module.scss";

const CustomLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    exitPage().then(() => router.push(href));
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
