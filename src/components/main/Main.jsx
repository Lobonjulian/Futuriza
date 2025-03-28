import CTASection from "./CTASection";
import Hero from "./Hero";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <CTASection />
    </main>
  );
};

export default Main;
