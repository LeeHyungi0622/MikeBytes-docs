import type { ReactNode } from "react";
import styles from "./styles.module.css";
import { SlideItemType } from "@site/src/types";

export default function SlideItem({
  index,
  title,
  description,
  path,
}: SlideItemType): ReactNode {
  return (
    <section key={index}>
      <h2>{title}</h2>
      <div>{description}</div>
    </section>
  );
}
