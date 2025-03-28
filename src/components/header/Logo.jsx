import logo from "/futuriza.svg";

import styles from "./styles.module.css";

const Logo = ({ height = 200}) => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" height={height} />
    </div>
  );
};

export default Logo;
