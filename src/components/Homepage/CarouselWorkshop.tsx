"use client";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";

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

const workshopList = [
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
  {
    img: "/images/Bootcamp/1.jpg",
    topic: "TECHNOLOGY",
    title: "The Complete DevSecOps Program รุ่นที่ 2",
    describe: "เปิดโลกสู่การทำ DevSecOps ในองค์กรปลดล็อกแนวทางปฏิบัติ...",
    auth: "ปรัชญาพงษ์ มโนศิลปกร",
    auth_img: "/images/Author/chokdee.png",
    date: "24 Jan - 31 May 2024",
    time: "09:30 - 17:30",
  },
];

export default function CarouselWorkshop() {
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
        {workshopList.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-gradient-to-b from-[#584665] to-[#9A6C85] h-[60vh] mx-2 rounded-2xl p-4"
            >
              <div className="bg-primary    text-white p-2 px-5 rounded-lg">
                {item.topic}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
