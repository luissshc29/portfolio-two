import { stacks } from "../constants/stacks";

export type Project = {
  id: string;
  tag: "frontend" | "backend" | "fullstack";
  title: {
    br: string;
    us: string;
  };
  images: {
    path: string;
    list: string[];
  };
  description: {
    br: string;
    us: string;
  };
  date: {
    br: string;
    us: string;
  };
  stacks: (typeof stacks)[number]["id"][];
  url?: string;
  repository?: string;
  complexity: number;
  highlight?: boolean;
};
