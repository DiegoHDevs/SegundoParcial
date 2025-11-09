import { features } from '../constants/features';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Características</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;