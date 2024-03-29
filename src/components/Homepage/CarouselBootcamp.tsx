"use client";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const bootCampList = [
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/1.jpg",
  },
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/2.jpg",
  },
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/3.jpg",
  },
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/4.jpg",
  },
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/5.jpg",
  },
  {
    topic: "BOOTCAMP",
    title: "Product Management Bootcamp",
    describe:
      "หลักสูตรทั่วไป 10 สัปดาห์สุดเข้มข้นด้วยเนื้อหาสำคัญ เตรียมความพร้อมให้คุณเป็น Product Manger",
    img: "/images/Bootcamp/6.jpg",
  },
];

export default function CarouselBootcamp() {
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        draggable={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="py-10"
      >
        {bootCampList.map((card, index) => {
          return (
            <div
              key={index}
              className="p-10 h-[60vh] flex space-x-1 shadow-xl bg-white mx-2"
            >
              <div
                className="h-full w-[50%] bg-zinc-500 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div className="w-[50%] px-4">
                <p className="text-primary">{card.topic}</p>
                <p className="font-bold text-xl">{card.title}</p>
                <p className="text-[#797979] text-sm my-4">{card.describe}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
