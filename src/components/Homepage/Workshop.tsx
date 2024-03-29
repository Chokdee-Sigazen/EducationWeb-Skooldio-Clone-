import CarouselWorkshop from "./CarouselWorkshop";

export default function Workshop() {
  return (
    <div>
      <p className="text-[35px] font-bold mt-5">เวิร์กชอปล่าสุด</p>
      <p className="font-bold mb-4 mt-3 text-[#797979]">
        พัฒนาทักษะอย่างใกล้ชิดกับผู้สอน พร้อมลงมือทำจริง
      </p>
      <CarouselWorkshop></CarouselWorkshop>
    </div>
  );
}
