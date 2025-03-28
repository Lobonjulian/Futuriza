import useVideo from "../hook/useVideo";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Tour de <span> Futuriza</span>
        </h1>
        <h3>
          Crea tu primer modelo de aprendizaje automático en minutos, sin
          necesidad de código.
        </h3>
        <p className={styles.heroDescription}>
          Con Futuriza, entrena modelos de aprendizaje automático de manera
          rápida y sencilla. No necesitas experiencia previa ni escribir código.
          ¡Crea soluciones inteligentes en solo unos minutos!
        </p>
      </div>
      <div className={styles.heroVideoContainer} ref={useVideo()} />
    </section>
  );
};

export default Hero;
