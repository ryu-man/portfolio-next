import {
  IconCloudDownload,
  IconGithub,
  IconLinkedin,
  IconTwitter,
} from "@/lib/components/mdi";

import Icon from "./icon";
import Picture from "./picture";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero sd:py-8 shrink gap-16 py-8">
      <div className="sd:items-start col-span-10 flex flex-col items-center">
        <div className="text-md font-medium opacity-50">Front-End Engineer</div>
        <div className="sd:items-start flex flex-col text-7xl font-medium text-center sd:text-start">
          <div className="text-[.8em] opacity-50">Hello I'm</div>
          <div className="font-bold">Abdelhalim Riache</div>
        </div>

        <div className="sd:text-start py-8 text-center">
          <p>
            Front-end Engineer specializing in modern JavaScript frameworks.
            With a passion for creating intuitive user experiences, I leverage
            modern front-end technologies like{" "}
            <span className="text-accent">Svelte</span>,
            <span className="text-accent">SvelteKit</span>,
            <span className="text-accent">React</span>, <span>and </span>
            <span className="text-accent">Next.js</span> to build responsive,
            high-performance web applications.
          </p>
          <br />
          <p className="text-sm">
            My expertise extends beyond the client side, allowing me to
            contribute to backend architecture and create seamless integrations
            between system layers, create APIs in both RESTfull and GraphQL
            technologies and communicate with databases both SQL and NoSQL like
            Firebase and Supabase.
          </p>
        </div>

        <div className="md:justify-between flex w-full items-center justify-center gap-10 py-2">
          <a href="/resume.pdf" download>
            <Button>
              <div>Download Resume</div>
              <Icon className="h-full">
                <IconCloudDownload />
              </Icon>
            </Button>
          </a>

          <div className="flex justify-between">
            <ul className="md:flex gap-4 hidden ">
              <li className="hover:text-primary-500">
                <a
                  className="h-10 hover:text-accent duration-200 ease-in-out"
                  href="https://github.com/ryu-man"
                >
                  <Icon className="h-8">
                    <IconGithub />
                  </Icon>
                </a>
              </li>
              <li className="hover:text-primary-500">
                <a
                  className=" hover:text-accent duration-200 ease-in-out"
                  href="https://www.linkedin.com/in/abdelhalim-riache/"
                >
                  <Icon className="h-8">
                    <IconLinkedin />
                  </Icon>
                </a>
              </li>
              <li className="hover:text-primary-500">
                <a
                  className=" hover:text-accent duration-200 ease-in-out"
                  href="https://x.com/el_hilmii"
                >
                  <Icon className="h-8">
                    <IconTwitter />
                  </Icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="image col-span-6 col-start-11 row-span-full flex items-center justify-center">
        <Picture />
      </div>
    </section>
  );
};

export default Hero;
