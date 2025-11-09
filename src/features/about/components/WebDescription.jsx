import styles from "../styles/WebDescription.module.css";
import { projectDescriptions } from "../constants/project-descriptions";

const WebDescription = () => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>¿Qué es Countries Explorer?</h2>

    <div className={styles.projectInfo}>
      {projectDescriptions.map((desc, index) => (
        <p key={index} className={styles.description}>
          {index === 0 && <strong>Countries Explorer</strong>} {desc.text}
        </p>
      ))}
    </div>
  </section>
);

export default WebDescription;
