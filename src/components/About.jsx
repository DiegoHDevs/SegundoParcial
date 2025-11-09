import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const developers = [
    {
      name: "Diego Heríquez",
      role: "Full Stack Developer",
      avatar: "👨‍💻",
      bio: "Especialista en React y Node.js con pasión por crear experiencias de usuario excepcionales.",
      github: "github.com/diegohdevs",
      email: "diegohenriquezhs2015@gmail.com"
    },
    {
      name: "Matías Heríquez",
      role: "Backend Developer",
      avatar: "🧑‍💻",
      bio: "Arquitecto de APIs y bases de datos. Enfocado en rendimiento y escalabilidad.",
      github: "github.com/mathenriquez",
      email: "matias.henriquez.dev@gmail.com"
    }
  ];

  const features = [
    {
      icon: "🌍",
      title: "Datos Globales",
      description: "Información actualizada de más de 250 países del mundo"
    },
    {
      icon: "⚡",
      title: "Rendimiento",
      description: "Carga rápida y navegación fluida gracias a React y Vite"
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Diseño adaptable a cualquier dispositivo móvil, tablet o desktop"
    },
    {
      icon: "🎨",
      title: "Diseño Moderno",
      description: "Interfaz atractiva con gradientes, animaciones y efectos visuales"
    },
    {
      icon: "🔍",
      title: "Exploración Fácil",
      description: "Navegación intuitiva entre países y sus vecinos limítrofes"
    },
    {
      icon: "🌐",
      title: "API REST",
      description: "Integración con REST Countries API para datos en tiempo real"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Sobre Countries Explorer</h1>
        <p className={styles.heroSubtitle}>
          Explora el mundo de manera interactiva y moderna
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>¿Qué es Countries Explorer?</h2>
        <div className={styles.projectInfo}>
          <p className={styles.description}>
            <strong>Countries Explorer</strong> es una aplicación web moderna desarrollada con React 
            que permite explorar información detallada sobre todos los países del mundo. 
            Utilizamos la API de REST Countries para obtener datos actualizados en tiempo real 
            sobre población, idiomas, monedas, zonas horarias y mucho más.
          </p>
          <p className={styles.description}>
            Nuestro objetivo es proporcionar una experiencia de usuario excepcional con un diseño 
            atractivo, navegación intuitiva y datos precisos. Ya sea que estés planeando un viaje, 
            estudiando geografía o simplemente explorando por curiosidad, Countries Explorer es 
            tu compañero perfecto.
          </p>
        </div>
      </section>

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
                <a href={`https://${dev.github}`} className={styles.devLink} target="_blank" rel="noopener noreferrer">
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

      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>Tecnologías Utilizadas</h2>
        <div className={styles.techStack}>
          <div className={styles.techItem}>⚛️ React 19</div>
          <div className={styles.techItem}>⚡ Vite</div>
          <div className={styles.techItem}>🎨 CSS Modules</div>
          <div className={styles.techItem}>🛣️ React Router</div>
          <div className={styles.techItem}>🌐 REST Countries API</div>
          <div className={styles.techItem}>📱 Responsive Design</div>
        </div>
      </section>

      <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backButton}>
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default About;
