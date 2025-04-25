import { cn } from "../utils";

const Section = ({ className = "", children }) => {
  return <section className={cn("py-20", className)}>{children}</section>;
};

export default Section;
