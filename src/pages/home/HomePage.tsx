import { Section } from "components/Elements";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Feedbacks from "./Feedbacks";
import Projects from "./Projects";
import Skills from "./Skills";
import { profile } from "constants";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash?.slice(1);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="">
      <Section id="about">
        <About
          descriotion={profile.description}
          roles={profile.roles}
          cvUrl={profile.cvUrl}
        />
      </Section>
      <Section id="experience">
        <Experience experiences={profile.experiences} />
      </Section>
      <Section id="education">
        <Education qualifications={profile.qualifications} />
      </Section>
      <Section id="skills">
        <Skills skills={profile.skills} />
      </Section>
      <Section id="projects">
        <Projects
          projectDescription={profile.projectsDescription}
          projects={profile.projects}
        />
      </Section>
      <Section id="achievements">
        <Achievements achievements={profile.achievements} />
      </Section>
      <Section id="feedbacks">
        <Feedbacks feedbacks={profile.feedbacks} />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
}
