import { cn } from "../utils";

const Icon = ({ className, children }) => {
  return (
    <div
      className={cn(
        "icon flex items-center justify-center aspect-square",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Icon;
