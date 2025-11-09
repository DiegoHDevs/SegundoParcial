import styles from '../styles/Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.heroTitle}>Sobre Countries Explorer</h1>
    <p className={styles.heroSubtitle}>
      Explora el mundo de manera interactiva y moderna
    </p>
  </div>
);

export default Hero;
