import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.png"
          width={80}
          height={80}
          className={styles.logoImage}
          alt="Logo"
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
