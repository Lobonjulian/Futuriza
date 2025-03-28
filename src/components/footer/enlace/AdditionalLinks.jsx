import { EnlacesAdicionales } from "./FooterEnlaces";
import List from "../../Common/List";

import styles from "./styles.module.css";

const AdditionalLinks = () => {
  return (
    <div className={styles.additionalLinks}>
      <List items={EnlacesAdicionales} className={styles.additionalLinksList} />
    </div>
  );
};

export default AdditionalLinks;
