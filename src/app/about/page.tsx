import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Mave</h2>
        <h1 className={styles.title}>Innovating Blockchain Subscriptions</h1>
        <p className={styles.desc}>
          Mave Finance redefines the blockchain experience with our cutting-edge
          subscription service platform. With a decade of expertise, we harness
          the power of Account Abstraction to streamline recurring payments and
          open the doors to a smarter way of managing digital assets. Our
          ERC-4337 based Smart Accounts offer unparalleled features including
          transaction sponsorship and automated payments with Ethereum and other
          tokens. At Mave, we not only offer subscription solutions but empower
          users with the ability to own, transfer, and monetize their
          subscription tokens. Join us in the blockchain revolution, where we
          prioritize security, efficiency, and your financial freedom.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year in Blockchain Innovation</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
