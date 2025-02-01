import type { ReactNode } from "react";
import styles from "./styles.module.css";
import { SlideItem } from "@site/src/types";

export default function Slide({
  title,
  description,
  path,
  children,
}: SlideItem): ReactNode {
  return (
    <section>
      <h2>{title}</h2>
      <div>{description}</div>
      <div>{children}</div>
    </section>
  );
}
