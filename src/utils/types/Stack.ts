import { IconType } from "react-icons/lib";

export type Stack = {
  id: string;
  name: string;
  url: string;
  component: IconType;
  description: {
    br: string;
    us: string;
  };
  color: {
    light: string;
    dark: string;
  };
};
