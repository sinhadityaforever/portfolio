import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import NavDropDown from "../components/NavDropDown";
import FadeIn from "react-fade-in";
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <FadeIn>
          <Hero />
        </FadeIn>
        <BgAnimation />
      </Section>
      <FadeIn>
        <Timeline />
      </FadeIn>
      <Projects />
      <FadeIn>
        <Technologies />
      </FadeIn>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
