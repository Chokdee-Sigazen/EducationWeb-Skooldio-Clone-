"use client";
import { useState } from "react";

export default function UpdateSkillPanel() {
  const [select, setSelect] = useState(true);

  const handleOnclick1 = () => {
    setSelect(true);
  };
  const handleOnclick2 = () => {
    setSelect(false);
  };
  return (
    <section className="min-h-[100vh] my-10 bg-[#F3F4F8] w-full ">
      <div className="w-[75%] text-center mx-auto pt-20">
        <p className="font-[500] text-4xl">อัปสกิลยุคใหม่ไปกับเรา</p>
        <div className="flex space-x-4 justify-center mt-10 text-xl font-bold text-[#98989A]  ">
          <button
            onClick={handleOnclick1}
            className={`${
              select ? "text-primary  border-b-4 border-primary " : ""
            } p-2 transition-all duration-150`}
          >
            สำหรับบุคคลทั่วไป
          </button>
          <button
            onClick={handleOnclick2}
            className={`${
              !select ? "text-primary  border-b-4 border-primary " : ""
            } p-2 transition-all duration-150`}
          >
            สำหรับองค์กรณ์
          </button>
        </div>
        <div className="mt-10">
          {select ? (
            <NormalComponent></NormalComponent>
          ) : (
            <OrganizationComponent></OrganizationComponent>
          )}
        </div>
      </div>
    </section>
  );
}

function OrganizationComponent() {
  return (
    <div className="flex space-x-10 h-[22rem] justify-center">
      <div className="min-w-[49%] h-[80%] bg-[url('/images/upskill4.jpg')] bg-cover bg-center rounded-2xl "></div>
      <div className="w-full text-start ">
        <p className="text-[2.2rem] font-[600]">
          หลักสูตร In-House Training ด้วยทักษะแห่งอนาคต
        </p>
        <p className="text-[#98989A] my-1">
          คอร์สอบรมทักษะยุคใหม่ให้ทำงานเก่งขึ้นทั้งองค์กร ในรูปแบบเวิร์กชอป
          และหลักสูตรออนไลน์ ที่คุณออกแบบได้
        </p>
        <div className=" flex space-x-5 mt-8">
          <div className="h-7 w-7 rounded-full bg-primary"></div>
          <p>Customize หลักสูตรตามความต้องการขององค์กร</p>
        </div>
        <div className="mt-3 flex space-x-5">
          <div className="h-7 w-7 rounded-full bg-primary"></div>
          <p>Customize หลักสูตรตามความต้องการขององค์กร</p>
        </div>
        <div className="mt-3 flex space-x-5">
          <div className="h-7 w-7 rounded-full bg-primary"></div>
          <p>Customize หลักสูตรตามความต้องการขององค์กร</p>
        </div>
        <button className="p-2 px-5 bg-[#4E60A6] hover:bg-[#475696] transition-colors duration-200  text-white rounded-full mt-7">
          สอบถามข้อมูลเพิ่มเติม
        </button>
      </div>
    </div>
  );
}

const data: NormalComponentDetailProps[] = [
  {
    title: "คอร์สออนไลน์ เนื้อหาอัดแน่น",
    describe:
      "เรียนรู้ทุกทักษะสำคัญผ่านแพลตฟอร์มที่ออกแบบมาเพื่อประสบการณ์การเรียนออนไลน์ที่ดีที่สุด ที่มีผู้เรียนแล้ว กว่า 100,000 คน",
    subdetail: ["เรียนจบรับประกาศนียบัตร", "สามารถกลับมาเรียนทบทวนได้"],
    buttonText: "ดูเวิร์กชอปทั้งหมด",
    now: -1,
    setNow: () => {},
    index: 0,
  },
  {
    title: "เวิร์กชอป พร้อมลงมือทำจริง",
    describe: "พัฒนาทักษะอย่างใกล้ชิดกับผู้สอน พร้อมลงมือทำจริง",
    subdetail: [
      "หนังสือ และสื่อการเรียนสุด Exclusive",
      "ถามตอบกับผู้เชี่ยวชาญตัวจริง",
    ],
    buttonText: "ดูเวิร์กชอปทั้งหมด",
    now: -1,
    setNow: () => {},
    index: 1,
  },
  {
    title: "Bootcamp หลักสูตรเข้มข้นระยะยาว",
    describe: "หลักสูตรเข้มข้นระยะยาว พร้อมเริ่มสายงานใหม่ได้จริง",
    subdetail: [
      "เรียนรู้กับผู้เชี่ยวชาญในสายงานโดยตรงมากมาย",
      "รับใบประกาศนียบัตรพร้อมใส่ใน Resume",
      "ทำโปรเจกต์จริง ปั้น Portfolio สมัครงาน",
    ],
    buttonText: "ดูรายละเอียด",
    now: -1,
    setNow: () => {},
    index: 2,
  },
];

const bgImg = [
  "/images/upskill1.jpg",
  "/images/upskill2.jpg",
  "/images/upskill3.jpg",
];

function NormalComponent() {
  const [now, setNow] = useState(0);
  return (
    <div className="flex space-x-10 h-[22rem] justify-center">
      <div
        className="min-w-[49%] h-[80%] bg-cover bg-center rounded-2xl "
        style={{ backgroundImage: `url(${now == -1 ? bgImg[0] : bgImg[now]})` }}
      ></div>
      <div className="w-full ">
        {data.map((item, index) => {
          return (
            <NormalComponentDetail
              title={item.title}
              describe={item.describe}
              subdetail={item.subdetail}
              buttonText={item.buttonText}
              now={now}
              key={index}
              setNow={setNow}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

interface NormalComponentDetailProps {
  title: string;
  describe: string;
  subdetail: string[];
  buttonText: string;
  now: number;
  index: number;
  setNow: Function;
}

function NormalComponentDetail(props: NormalComponentDetailProps) {
  console.log(props.now, props.index);
  return (
    <div
      className={` overflow-hidden   border-b-2 border-[#98989A] transition-all duration-500 ${
        props.now == props.index ? "max-h-full" : "max-h-[5rem]"
      }`}
    >
      <section className="flex space-x-3 w-full items-center h-full  p-4 ">
        <div className="h-12 min-w-12 bg-primary"></div>
        <div className="flex justify-between w-full h-12">
          <div className="font-[600] text-[1.4rem]   ">{props.title}</div>
          <button
            onClick={() => {
              props.setNow(props.index);
              if (props.now == props.index) props.setNow(-1);
            }}
            className="h-10 w-10 text-center text-primary  text-3xl font-[400]"
          >
            {props.now == props.index ? "-" : "+"}
          </button>
        </div>
      </section>
      <div className="flex space-x-3 px-4">
        <div className="h-12 min-w-12 "></div>
        <div className="text-[#98989A] text-start">
          <p className="mb-7">{props.describe}</p>
          {props.subdetail?.map((sub, index) => {
            return (
              <div className="mt-3 flex space-x-5" key={index}>
                <div className="h-7 w-7 rounded-full bg-primary"></div>
                <p>{sub}</p>
              </div>
            );
          })}
          <button className="h-10 px-7 mb-5 mt-8 p-2 bg-[#7469B6] hover:bg-[#6c61a8] transition-colors duration-200 rounded-full  text-white">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
