import { cn } from "../utils";

const Section = ({ className = "", children }) => {
  return <section className={cn("py-28", className)}>{children}</section>;
};

export default Section;
