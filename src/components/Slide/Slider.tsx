import { Children, type ReactNode } from "react";
import styles from "./styles.module.css";
import SlideItem from "./SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SlideItemType } from "@site/src/types";
import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideItemList: SlideItemType[] = [
  {
    index: 2,
    title: "Project-1",
    description: "Description-1",
    path: "",
  },
  {
    index: 3,
    title: "Project-2",
    description: "Description-2",
    path: "",
  },
  {
    index: 4,
    title: "Project-3",
    description: "Description-3",
    path: "",
  },
  {
    index: 5,
    title: "Project-4",
    description: "Description-4",
    path: "",
  },
  {
    index: 6,
    title: "Project-5",
    description: "Description-5",
    path: "",
  },
  {
    index: 7,
    title: "Project-6",
    description: "Description-6",
    path: "",
  },
];

export default function Slider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const onSlideChange = () => {
    console.log("slide change");
  };

  const onSwiper = (swiper: any) => {
    console.log("slide swiped", swiper);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
    >
      <SwiperSlide key={0}>
        <SwiperSlide>{children}</SwiperSlide>
      </SwiperSlide>
      {slideItemList.map(({ index, title, description, path }) => (
        <SwiperSlide key={index}>
          <SlideItem
            index={index}
            title={title}
            description={description}
            path=""
          ></SlideItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
