import styles from "./styles/About.module.css";
import Hero from "./components/Hero";
import WebDescription from "./components/WebDescription";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import TechSection from "./components/TechSection";
import BackButton from "../common/components/BackButton";

const About = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <WebDescription />
      <FeaturesSection />
      <TeamSection />
      <TechSection />
      <BackButton />
    </div>
  );
};

export default About;
