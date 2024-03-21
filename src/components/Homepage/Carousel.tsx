import Rating from "@mui/material/Rating";
import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const slideCard = [
  {
    image: "/images/Category/1.png",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 4,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/2.jpeg",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/3.jpeg",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/4.png",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/5.jpg",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/6.png",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/7.png",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
  {
    image: "/images/Category/8.jpg",
    topic: "ONLINE COURSE",
    title: "AWS : DevSecOps Fundemental",
    describe:
      "พื้นฐานเทคโนโลยีรอ่บด้านตั้งแต่ 0 สู่การเข้าใจ software อย่างแท้จริง",
    star: 5,
    author: "ปรัชญาพงษ์ มโนศิลปกร",
    author_img: "/images/Author/chokdee.png",
  },
];

export default function CarouselCard() {
  return (
    <div className=" mt-4">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        draggable={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="py-10"
      >
        {slideCard.map((card, index) => {
          return (
            <motion.div
              whileHover={{ y: -15 }}
              className="slider bg-white shadow-md h-auto  mx-1 rounded-lg"
              key={index}
            >
              <div
                className=" h-[8rem] w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="w-[90%] mx-auto my-2">
                <p className="  text-primary text-[10px] font-[500]">
                  {card.topic}
                </p>
                <p>{card.title}</p>
                <p className="text-[0.8rem] text-[#797979]">{card.describe}</p>
                <div className=" h-[7rem]" />
                <div className="flex space-x-1">
                  <Rating name="readOnly" value={card.star} readOnly />
                  <div className=" text-center text-[#797979]">{card.star}</div>
                </div>
                <div className="mt-3 flex space-x-1 pb-10">
                  <div
                    className="h-10 w-10 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.author_img})` }}
                  ></div>
                  <p className="p-2 ">{card.author}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Carousel>
    </div>
  );
}
