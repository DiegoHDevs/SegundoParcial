import { developers } from '../constants/developers-descriptions';
import styles from '../styles/TeamSection.module.css';

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
      <div className={styles.teamGrid}>
        {developers.map((dev, index) => (
          <div key={index} className={styles.devCard}>
            <div className={styles.devAvatar}>{dev.avatar}</div>
            <h3 className={styles.devName}>{dev.name}</h3>
            <p className={styles.devRole}>{dev.role}</p>
            <p className={styles.devBio}>{dev.bio}</p>
            <div className={styles.devLinks}>
              <a
                href={`https://${dev.github}`}
                className={styles.devLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={`mailto:${dev.email}`} className={styles.devLink}>
                Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;