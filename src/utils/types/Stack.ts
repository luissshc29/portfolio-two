import React from "react";
import { IconType } from "react-icons/lib";

export type Stack = {
  id: number;
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
