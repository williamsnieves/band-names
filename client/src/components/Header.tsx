import logo from "../assets/logo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <img src={logo} width={300} className={styles.logo} />
    </header>
  );
};

export default Header;
