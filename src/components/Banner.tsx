export default function Banner() {
  return (
    <div className="w-full h-[60vh] py-14 bg-[#F9F9F9]">
      <div className=" w-[75%] flex mx-auto  h-full ">
        <div className="my-auto w-full">
          <p className="font-[600] text-[50px]">
            คอร์สเรียนออนไลน์<br></br> เพิ่มทักษะยุคดิจิทัล
          </p>
          <p className=" mt-2 font-[500] text-lg">
            พร้อมเวิร์กชอปและ Bootcamp ที่จะช่วยอัปสกิล<br></br>{" "}
            ให้คุณทำงานเก่งขึ้น!
          </p>
          <div className="flex h-16 py-4 space-x-3 ">
            <div className="w-56 border-2 border-primary rounded-full"></div>
            <div className="w-20 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="w-[60%] h-full bg-primary"></div>
      </div>
    </div>
  );
}
