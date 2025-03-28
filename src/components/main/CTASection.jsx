import Button from "../Common/Button";

import styles from "./styles.module.css";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>¿Listo para crear tu primer modelo?</h2>
        <p>
          Empieza a crear tus modelos de aprendizaje automático en minutos, sin
          necesidad de código.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default CTASection;
