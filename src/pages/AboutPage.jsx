import { Helmet } from "react-helmet-async";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Moe Kyaw Aung</title>
        <meta
          name="description"
          content="Learn about Moe Kyaw Aung's software engineering experience, education, and technical practice."
        />
      </Helmet>

      <div className="pt-20">
        <About />
        <Experience />
        <Education />
        <Certifications />
      </div>
    </>
  );
}
