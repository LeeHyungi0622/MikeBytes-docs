import { ReactNode } from "react";

export type FeatureItemType = {
  title: string;
  path: string;
  children: ReactNode;
};

export type SlideItemType = {
  index: number;
  title: string;
  description: string;
  path: string;
  children?: ReactNode;
};
