import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import AndroidProjects from "../components/sections/AndroidProjects";
import FullStackProjects from "../components/sections/FullStackProjects";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Publications from "../components/sections/Publications";
import Awards from "../components/sections/Awards";
import Testimonials from "../components/sections/Testimonials";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Blog from "../components/sections/Blog";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Moe Kyaw Aung | Senior Android Developer</title>
        <meta
          name="description"
          content="Portfolio of Moe Kyaw Aung, a senior Android developer and software engineer specializing in Kotlin, Jetpack Compose, React, and Next.js."
        />
        <link rel="canonical" href="https://moekyaw.dev/" />
      </Helmet>

      <Hero />
      <About />
      <AndroidProjects />
      <FullStackProjects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Publications />
      <Awards />
      <Testimonials />
      <Services />
      <Contact />
      <Blog />
    </>
  );
}
