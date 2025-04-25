"use client";

import {
  BunJsIcon,
  CssIcon,
  D3Icon,
  DrizzleIcon,
  ExpressjsIcon,
  FirebaseIcon,
  GitHubActions,
  GitHubIcon,
  GitIcon,
  GraphqlIcon,
  HtmlIcon,
  MongodbIcon,
  NextjsIcon,
  NodeJsIcon,
  PostgresqlIcon,
  SupabaseIcon,
  TailwindcssIcon,
  VercelIcon,
} from "@/lib/components/icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DrawerSkill from "./drawer-skill";
import { SvelteSkill } from "./skills/svelte";
import { ReactSkill } from "./skills/react";
import { useEffect, useState } from "react";
import { cn } from "../utils";

const Skills = () => {
  const skills = [
    {
      title: "HTML 5",
      Icon: HtmlIcon,
    },
    {
      title: "CSS",
      Icon: CssIcon,
    },
    {
      title: "TailwindCSS",
      Icon: TailwindcssIcon,
    },
    SvelteSkill,
    ReactSkill,
    {
      title: "Next.js",
      Experience: "",
      Icon: NextjsIcon,
      isFramework: true,
    },
    {
      title: "Node.js",
      Experience: "",
      Icon: NodeJsIcon,
    },
    {
      title: "Bun.js",
      Experience: "",
      Icon: BunJsIcon,
    },
    {
      title: "GraphQL",
      Experience: "",
      Icon: GraphqlIcon,
    },
    {
      title: "Firebase",
      Experience: "",
      Icon: FirebaseIcon,
    },

    {
      title: "Mongodb",
      Icon: MongodbIcon,
    },
    {
      title: "PostgreSQL",
      Experience: "",
      Icon: PostgresqlIcon,
    },
    {
      title: "Supabase",
      Experience: () => (
        <div className="text-start flex flex-col gap-2 mt-4">
          <p>
            Supabase its an SQL database based on PostgreSQL, I am using in a
            side project I am currently working on.
          </p>
          <p>
            I have extensive knowledge on SQL, tables, how to define relations
            between table (1:1, 1:* and *:*), in addition Supabase offers
            integrated authentication using different methods (email, phone
            number, ) and a file storage service
          </p>
        </div>
      ),
      Icon: SupabaseIcon,
    },
    {
      title: "Drizzle",
      Experience: "",
      Icon: DrizzleIcon,
    },

    {
      title: "D3",
      Experience: "",
      Icon: D3Icon,
    },
    {
      title: "Express.js",
      Experience: "",
      Icon: ExpressjsIcon,
    },

    {
      title: "Git",
      Experience: "",
      Icon: GitIcon,
    },
    {
      title: "GitHub Actions",
      Experience: "",
      Icon: GitHubActions,
    },
    {
      title: "GitHub",
      Experience: "",
      Icon: GitHubIcon,
    },

    {
      title: "Vercel",
      Experience: "",
      Icon: VercelIcon,
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState();
  useEffect(() => console.log(selectedSkill), [selectedSkill]);

  return (
    <>
      <div className="lg:flex sd:justify-around sd:h-fit grid grid-cols-4 place-items-center py-16 gap-y-8 gap-x-2 flex-wrap">
        <TooltipProvider>
          {skills.map((skill) => {
            const Icon = skill.Icon;
            const Description =
              typeof skill.description === "string"
                ? () => <p className="text-start">{skill.description}</p>
                : skill.description;

            // const Experience =
            //   typeof skill.Experience === "string"
            //     ? () => <p className="text-start">{skill.Experience}</p>
            //     : skill.Experience;

            return (
              <Tooltip key={skill.title}>
                <TooltipTrigger
                  className={cn(
                    "h-12 aspect-square hover:text-accent duration-300 ease-in-out rounded-lg p-2 bg-primary/5",
                    skill.isFramework &&
                      "bg-accent/5 text-accent hover:bg-accent/20 active:bg-accent/30"
                  )}
                  onClick={() => setSelectedSkill(skill)}
                >
                  {/* <motion.div initial={{ scale: 1 }}> */}
                  <Icon />
                  {/* </motion.div> */}
                </TooltipTrigger>
                <TooltipContent className="max-w-[18rem]">
                  <h3 className="text-lg font-semibold">{skill.title}</h3>

                  {Description && <Description />}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>

      <DrawerSkill
        skill={selectedSkill}
        onClose={() => setSelectedSkill(undefined)}
      ></DrawerSkill>
    </>
  );
};

export default Skills;
