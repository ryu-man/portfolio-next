import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import Icon from "./icon";
import { IconGithub, IconLinkedin, IconTwitter } from "./mdi";

type ListItemProps = {
  href: string;
  children?: ReactNode;
};
const ListItem = ({ href, children }: ListItemProps) => {
  return (
    <li className="px-2">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const Header = () => {
  return (
    <div className="flex justify-between items-center pt-4 pb-16 font-medium text-md">
      <div className="font-bold text-3xl">
        <Link href="/">Abdel.</Link>
      </div>

      <div className="flex items-center gap-4">
        <ul className="sd:flex gap-4 hidden">
          <ListItem href="#services">Services</ListItem>
          {/* <ListItem href="/resume">Resume</ListItem> */}
          <ListItem href="#projects">Work</ListItem>
          <ListItem href="#contact">Contact</ListItem>
        </ul>

        <ul className="flex md:hidden gap-4">
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

        <Button>
          <a href="https://www.linkedin.com/in/abdelhalim-riache/">Hire me</a>
        </Button>
      </div>
    </div>
  );
};
