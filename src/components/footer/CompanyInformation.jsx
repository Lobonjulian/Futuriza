import styles from "./styles.module.css";

const CompanyInformation = () => {
  return (
    <div className={styles.companyInfo}>
      <h3 className={styles.companyTitle}>Futuriza</h3>
      <p className={styles.companyDescription}>
        permite crear modelos de inteligencia artificial sin código, haciendo la
        tecnología accesible para todos.
      </p>
    </div>
  );
};

export default CompanyInformation;
