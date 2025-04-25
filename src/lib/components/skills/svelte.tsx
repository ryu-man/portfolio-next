import { Badge } from "@/components/ui/badge";
import { ReactIcon, SvelteIcon } from "@/lib/components/icons";

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col text-primary-foreground">
        <div className="font-medium mb-2 text-xl">Experience</div>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>
            Proficiently create and manage states using stores and runes (state,
            derived and effect), power with context API to support cross
            component state management.
          </li>
          <li>
            Build component with performance in mind by using different
            techniques such as code splitting, lazy loading and excessive
            execution rate limitation.
          </li>
          <li>
            Integrate third-party libraries effectively in Svelte using built-in
            features like Actions.
          </li>
          <li>
            Create reusable UI components, with focus on custimizability,
            scalability and composition using TailwindCSS, context API and Snippets.
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <div className="font-medium mb-2 text-xl">
          Integration with other technologies
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">TailwindCSS</Badge>
          <Badge variant="secondary">d3.js</Badge>
          <Badge variant="secondary">GSAP</Badge>
          <Badge variant="secondary">anime.js</Badge>
          <Badge variant="secondary">motion</Badge>
          <Badge variant="secondary">Tanstack Query</Badge>
          <Badge variant="secondary">date-fn</Badge>
          <Badge variant="secondary">Tauri</Badge>
          <Badge variant="secondary">Electron</Badge>
        </div>
      </div>

      <div className="flex flex-col">
        {/* <div className="font-medium mb-2 text-xl">Frameworks Translation</div> */}
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="flex text-xl items-center gap-2">
              <div className="h-[1em]">
                <ReactIcon />
              </div>
              <div>React</div>
            </div>
            <p>
              Translate code from React to Svelte and from Svelte to React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <p>
      With over 4 years of experience I used Svelte to create responsive web
      applications and design systems, enhance user experience and deliver high
      performance apps, I able to create and manage sophisticated states using
      stores, runes and context api
    </p>
  );
};

const features = () => {
  return [
    "State Management",
    "API Integrations",
    "Performance Optimization",
    "Figma Translation",
    "Design Systems",
  ];
};

const projects = () => {
  return [];
};

export const SvelteSkill = {
  title: "Svelte | SvelteKit",
  yoe: 5,
  proficiency: "Expert",
  isFramework: true,
  Description: Description,
  Experience: Experience,
  Icon: SvelteIcon,
  projects,
  features,
};
