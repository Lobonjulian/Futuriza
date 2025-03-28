import Button from "../Common/Button";
import Navbar from "./Navbar";
import Logo from "./Logo";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo height={100} />
      <Navbar />
      <Button />
    </header>
  );
};

export default Header;
