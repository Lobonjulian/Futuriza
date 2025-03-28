import AdditionalLinks from "./enlace/AdditionalLinks";
import CompanyInformation from "./CompanyInformation";
import Logo from "../header/Logo";
import NavigationLinks from "./enlace/NavigationLinks";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <footer className={styles.footerContent}>
        <CompanyInformation />
        <NavigationLinks />
        <AdditionalLinks />
      </footer>
    </footer>
  );
};

export default Footer;
