import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { FeatureItem } from "@site/src/types";

const FeatureList: FeatureItem[] = [
  {
    title: "UX/UI",
    path: require("@site/static/img/uiux-icon.png").default,
    children: <>사용자 경험(UX)를 끊임없이 고려하여 UI를 개발합니다.</>,
  },
  {
    title: "웹 표준과 접근성",
    path: require("@site/static/img/web_standard_a11y.png").default,
    children: (
      <>
        W3C HTML5 표준을 이해하고 있으며, 시각장애인이나 정보에 대한
        접근성(a11y)이 떨어지는 사람들이 모두 편하게 이용할 수 있는 개발을
        지향합니다.
      </>
    ),
  },
  {
    title: "프론트엔드 개발",
    path: require("@site/static/img/frontend_performance_opt.png").default,
    children: (
      <>
        단순 UI/UX가 아닌 렌더링 최적화를 통한 성능개선을 고려하여 웹
        프론트엔드를 개발합니다.
      </>
    ),
  },
];

function Feature({ title, path, children }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="">
        <section className={styles.featureSection}>
          <img className={styles.featureImg} src={path} alt="" />
          <span>{title}</span>
        </section>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
