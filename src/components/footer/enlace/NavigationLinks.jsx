
import { EnlacesNavigation } from "./FooterEnlaces";
import List from "../../Common/List";

import styles from "./styles.module.css";

const NavigationLinks = () => {
  return (
    <div className={styles.navigationLinks}>
      <List items={EnlacesNavigation} className={styles.navigationLinksList} />
    </div>
  )
}

export default NavigationLinks