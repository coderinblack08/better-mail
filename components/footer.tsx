import styles from "../Footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://twitter.com/glaucia_lemos86">Twitter</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://twitter.com/glaucia_lemos86">Youtube</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://twitter.com/glaucia_lemos86">Linkedin</a>
        </li>
      </ul>
    </footer>
  );
}
