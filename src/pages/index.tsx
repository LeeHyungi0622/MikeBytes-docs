import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { FeatureItemType } from "../types";
import Slider from "../components/Slide/Slider";

function HomepageMainContents({ title, path, children }: FeatureItemType) {
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
          <Slider>
            <HomepageMainContents
              title="사용자 경험을 최우선으로 하는 프론트엔드 개발자"
              path={require("@site/static/img/profile-img.png").default}
            >
              <span className={styles.homePageMainContentsDesc}>
                기획부터 개발 그리고 배포까지 경험한 시야로, <br />더 나은
                개발을 고민합니다.
              </span>
            </HomepageMainContents>
          </Slider>
          <span className={styles.tmpText}>
            Swiper.js library를 활용해서 "Panorama slider" 또는 "Grid
            slider"형태 또는
            <br />
            "Autoplay progress(interval 시간 우측 하단 표기)" 또는 "Parallax
            slider"형태(좌측 상단에 구체적인 설명 작성 가능-버튼 배치해서
            설명으로 바로 갈 수 있게 구성 가능)로
            <br />
          </span>
        </Heading>
        <div></div>
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
