import Section from "./section";

const Services = () => {
  return (
    <Section className="py-8 md:py-32">
      <h2 className="font-bold text-6xl mb-8" id="services">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <div className="p-8 rounded-md bg-primary/10  border-primary/15 border ">
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p>
            Building responsive, user-friendly websites using HTML, CSS,
            JavaScript, Typescript, TailwindCSS and frameworks like React or
            Svelte.
          </p>
        </div>

        <div className="p-8 rounded-md md:translate-y-16 bg-accent/10  border-accent/40 border">
          <h3 className="text-2xl font-semibold mb-2">UI/UX Implementation</h3>
          <p>
            Translating design mockups into interactive interfaces, ensuring
            pixel-perfect visuals and smooth user experiences
          </p>
        </div>

        <div className="p-8 rounded-md bg-primary/10 border-primary/15 md:bg-accent/10 md:border-accent/50 border">
          <h3 className="text-2xl font-semibold mb-2">
            Web Performance Optimization
          </h3>
          <p>
            Enhancing site speed and performance through techniques like lazy
            loading, code splitting, and image optimization
          </p>
        </div>

        <div className="p-8 rounded-md md:translate-y-16 bg-accent/10 border-accent/40 md:bg-primary/10 md:border-primary/15 border">
          <h3 className="text-2xl font-semibold mb-2">
            Cross-Browser Compatibility
          </h3>
          <p>
            Ensuring websites function seamlessly across different browsers and
            devices, including mobile and desktop
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Services;
