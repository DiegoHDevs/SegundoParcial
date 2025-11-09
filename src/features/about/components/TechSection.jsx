import styles from '../styles/TechSection.module.css';
import { technologies } from '../constants/technologies';

const TechSection = () => {
  return (
    <section className={styles.techSection}>
      <h2 className={styles.darkSectionTitle}>Tecnologías Utilizadas</h2>
      <div className={styles.techStack}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            {tech.icon} {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;