import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ReactNode } from "react";

type DrawerSkillProps = {
  skill?: {
    title: string;
    proficiency: string;
    yoe: number;
    Icon: ReactNode;
    Description: ReactNode;
    Experience: ReactNode;
    features: () => string[];
  };
  onClose?: () => void;
};
const DrawerSkill = ({ skill, onClose }: DrawerSkillProps) => {
  const {
    title,
    Experience,
    Icon,
    yoe = 1,
    proficiency,
    features,
    Description,
  } = skill ?? {};
  return (
    <Drawer direction="bottom" open={!!skill} onClose={onClose}>
      {/* <DrawerTrigger>{children}</DrawerTrigger> */}
      <DrawerContent className="bg-primary text-primary-foreground py-10 px-8 md:px-16 lg:px-24">
        {!!skill && (
          <>
            <DrawerHeader className="">
              <DrawerTitle className="flex gap-1 items-center justify-between text-primary-foreground">
                <div className="flex items-center text-5xl font-bold gap-4 ">
                  {Icon && (
                    <div className="h-[1.2em] aspect-square flex items-center justify-center">
                      <Icon />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div>{title}</div>
                    <div className="text-sm font-normal">
                      {yoe} year of experience
                    </div>
                  </div>
                </div>

                <div className="text-5xl font-normal">{proficiency}</div>
                {/* <Button
                  className="text-primary-foreground bg-primary"
                  variant="outline"
                >
                  Cancel
                </Button> */}
              </DrawerTitle>
              <DrawerDescription className="py-6 flex flex-col gap-4 text-lg">
                {Description && <Description />}
                {features && (
                  <div className="flex gap-2">
                    {features().map((feature) => (
                      <Badge variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                )}
              </DrawerDescription>
            </DrawerHeader>

            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-2">{Experience && <Experience />}</div>

              <div className="grid grid-cols-1 flex-col">
                {(skill?.projects?.() ?? []).map((d) => {
                  return <div className="project">Coming Soon</div>;
                })}
              </div>
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSkill;
