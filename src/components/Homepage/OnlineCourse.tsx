"use client";
import { Carousel } from "@material-tailwind/react";
import Banner from "../Banner";
import CarouselCard from "./Carousel";
import { useState } from "react";

const tag = [
  { name: "All" },
  { name: "Date" },
  { name: "Design" },
  { name: "Technology" },
  { name: "Business" },
];

export default function OnlineCourse() {
  const [focus, setFocus] = useState(0);
  return (
    <section className="my-20">
      <p className="font-bold text-[35px] text-black">คอร์สออนไลน์</p>
      <div className="flex mt-2 h-12 w-full space-x-3 p-1">
        {tag.map((tag, index) => {
          return (
            <button
              onClick={() => {
                setFocus(index);
              }}
              key={tag.name}
              className={` border-[2.6px] rounded-full font-bold text-center p-1 px-6  items-center hover:border-primary transition-all duration-250 flex ${
                index == focus
                  ? "bg-[#d4a8f2] border-primary text-[#5b4769] "
                  : "bg-white border-[#D9D9D9]"
              }`}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
      <CarouselCard></CarouselCard>
    </section>
  );
}
