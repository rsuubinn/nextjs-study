import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={`${router.pathname === "/" ? styles.active : ""}`}>
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
    </nav>
  );
}
