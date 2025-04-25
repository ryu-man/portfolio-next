import { Header } from "@/lib/components/header";
import Hero from "@/lib/components/hero";
import Services from "@/lib/components/services";
import Skills from "@/lib/components/skills";
import Stats from "@/lib/components/stats";
import Projects from "@/lib/components/projects";
import Contact from "@/lib/components/contact";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <Header />

        <div className="md:contents flex flex-col">
          <Hero />
        </div>

        <Skills />
      </div>

      <Stats />

      <Services />

      <Projects />

      {/* <Education /> */}

      <Contact />
    </>
  );
}
