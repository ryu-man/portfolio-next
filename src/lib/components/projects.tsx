"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import "spotlight.js/dist/css/spotlight.min.css";
import Section from "./section";
import { useEffect, useRef } from "react";

const projects = [
  {
    name: "Cybersecurity Management Web Application",
    description:
      "Migrate a legacy Svelte code into a well architected, robust and highly responsive web application using Sveltekit to handle navigation, data loading and state management, Typescript for types documentation and TailwindCSS to handle handle styleing and keep component customizable, This project involve integration of graphQL API using URQL library.",
    category: "Front End",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "SvelteKit" },
      { name: "Figma" },
    ],
    images: [
      { url: "/images/projects/01/p1 (6).PNG" },
      { url: "/images/projects/01/p1 (1).PNG" },
      { url: "/images/projects/01/p1 (2).PNG" },
      { url: "/images/projects/01/p1 (3).PNG" },
      { url: "/images/projects/01/p1 (4).PNG" },
    ],
    github: "",
  },
  {
    name: "Gloss Cleaning Services",
    description: "A Landing page for Gloss cleaning services company.",
    category: "Front End",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "SvelteKit" },
    ],
    images: [
      { url: "/images/projects/03/p3 (1).png" },
      { url: "/images/projects/03/p3 (2).png" },
      { url: "/images/projects/03/p3 (6).png" },
      { url: "/images/projects/03/p3 (3).png" },
      { url: "/images/projects/03/p3 (4).png" },
    ],
    github: "https://github.com/ryu-man/gloss-llc",
  },
  {
    name: "Real-Time Orderbook for Crypto Exchanges ",
    description:
      "This project is an implementation of an orderbook integrated with a specific exchange. Powered by SvelteKit and D3.js, it leverages web sockets for real-time data updates in the web app through Svelte's stores. The orderbook is highly customizable and supports theming, giving users full control over the settings. As a versatile UI component, it can be seamlessly integrated into any webpage.",
    category: "Front End",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "SvelteKit" },
      { name: "D3.js" },
      { name: "Canvas API" },
    ],
    images: [
      { url: "/images/projects/02/p2 (1).jpg" },
      { url: "/images/projects/02/p2 (2).jpg" },
    ],
    github: "https://github.com/ryu-man/orderbook-svelte-d3",
  },
  {
    name: "Svelte Fluent UI Library",
    description:
      "Implementation of Microsoft Fluent UI design system for Svelte framework using TailwindCSS",
    category: "Front End",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "SvelteKit" },
      { name: "Storybook" },
    ],
    images: [
      { url: "/images/projects/04/p4 (1).png" },
      { url: "/images/projects/04/p4 (2).png" },
      { url: "/images/projects/04/p4 (3).png" },
      { url: "/images/projects/04/p4 (4).png" },
      { url: "/images/projects/04/p4 (5).png" },
    ],
    github: "https://github.com/ryu-man/svelte-fui",
  },
];

const Projects = () => {
  const spotlight = useRef(undefined);

  useEffect(() => {
    import("spotlight.js/src/js/spotlight").then((md) => {
      spotlight.current = md;
    });
  }, []);
  return (
    <Section className="">
      <h2 className="font-bold text-6xl mb-8" id="projects">
        My Projects
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, i) => {
          return (
            <div className="" key={project.name}>
              <div className="flex flex-col">
                <a
                  className="text-3xl font-semibold hover:text-accent hover:underline duration-200 transition-colors"
                  href={project.github}
                >
                  <span className="mr-2">{i + 1}.</span>
                  <span>{project.name}</span>
                </a>
                <div className="font-medium opacity-50">{project.category}</div>
              </div>

              <p className="pb-2 pt-1 text-sm">{project.description}</p>

              <div className="flex gap-2">
                {project.stack.map((item) => {
                  return (
                    <Badge
                      key={item.name}
                      className="bg-accent/10 border border-accent/10 text-accent"
                    >
                      {item.name}
                    </Badge>
                  );
                })}
              </div>

              <div className="p-4 grid grid-cols-4 gap-1">
                <Image
                  className="rounded-xl border shadow-md min-w-full overflow-hidden object-contain col-span-4 object-cover h-72 cursor-pointer"
                  src={project.images.at(0)?.url}
                  width={400}
                  height={100}
                  onClick={() => {
                    spotlight.current.show([
                      {
                        src: project.images.at(0)?.url ?? "",
                        title: `${project.name}`,
                      },
                    ]);
                  }}
                />

                {project.images.length ? (
                  project.images.slice(1).map((image) => {
                    return (
                      <Image
                        className="rounded-xl border shadow-md min-w-full overflow-hidden object-cover h-20 cursor-pointer"
                        key={image.url}
                        src={image.url}
                        objectFit="cover"
                        width={200}
                        height={40}
                        onClick={() => {
                          spotlight.current.show([
                            { src: image?.url ?? "", title: `${project.name}` },
                          ]);
                        }}
                      />
                    );
                  })
                ) : (
                  <div>No image is available</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
