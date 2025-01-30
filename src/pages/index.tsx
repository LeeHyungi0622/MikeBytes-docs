import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { FeatureItem } from "../types";

function HomepageMainContents({ title, path, children }: FeatureItem) {
  return (
    <div className={clsx("container", styles.homePageMainContentsContainer)}>
      <img className="profileImg" src={path} />
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          <HomepageMainContents
            title="사용자 경험을 최우선으로 하는 프론트엔드 개발자"
            path={require("@site/static/img/profile-img.png").default}
          >
            <span>
              기획부터 개발 그리고 배포까지 경험한 시야로, 더 나은 개발을
              고민합니다.
            </span>
          </HomepageMainContents>
        </Heading>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
