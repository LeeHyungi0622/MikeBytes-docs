import { ReactNode } from "react";

export type FeatureItem = {
  title: string;
  path: string;
  children: ReactNode;
};

export type SlideItem = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};
