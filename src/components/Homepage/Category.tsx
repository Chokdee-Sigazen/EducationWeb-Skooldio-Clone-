"use client";
import { motion } from "framer-motion";

const data = [
  {
    img: "",
    title: "Data",
    describe: "เรียนรู้ฝึกฝนกระบวนการ คิดสร้างมุลค่าให้ธุรกิจด้วยข้อมูล",
  },
  {
    img: "",
    title: "Design",
    describe: "เรียนรู้ฝึกฝนกระบวนการ คิดสร้างมุลค่าให้ธุรกิจด้วยข้อมูล",
  },
  {
    img: "",
    title: "Tech",
    describe: "เรียนรู้ฝึกฝนกระบวนการ คิดสร้างมุลค่าให้ธุรกิจด้วยข้อมูล",
  },
  {
    img: "",
    title: "Bussiness",
    describe: "เรียนรู้ฝึกฝนกระบวนการ คิดสร้างมุลค่าให้ธุรกิจด้วยข้อมูล",
  },
];

export default function Category() {
  return (
    <div>
      <p className="text-[35px] font-bold mb-4 mt-10">
        เลือกเรียนตามเรื่องที่คุณสนใจ
      </p>
      <section className="flex space-x-2">
        {data.map((item, index) => {
          return (
            <motion.a
              href="/"
              whileHover={{ y: -10 }}
              key={index}
              className="w-[25%] shadow-xl p-5 pt-10 rounded-2xl   "
            >
              <div className="flex space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <p className="p-1 text-2xl font-bold">{item.title}</p>
              </div>
              <p className="mt-3 mb-4 text-[#a3a3a3] text-lg">
                {item.describe}
              </p>
            </motion.a>
          );
        })}
      </section>
    </div>
  );
}
