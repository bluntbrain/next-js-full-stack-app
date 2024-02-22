import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mave</div>
      <div className={styles.text}>
        Innovating Blockchain Subscriptions © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
