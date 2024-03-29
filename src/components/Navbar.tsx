import Link from "next/link";

const topicNavbar = [
  { name: "คอร์สออนไลน์", href: "" },
  { name: "เวิร์กชอป", href: "" },
  { name: "Bootcamp", href: "" },
  { name: "สำหรับองค์กร", href: "" },
  { name: "บทความ", href: "" },
  { name: "เข้าสู่ระบบ", href: "" },
  { name: "ลงทะเบียน", href: "" },
];

export default function Navbar() {
  return (
    <div className="w-full bg-white z-40  shadow-lg fixed">
      <div className="w-[75%]  h-16 flex mx-auto  px-6 justify-between items-center ">
        <div className=" h-10 w-24 bg-primary"></div>
        <div className="flex ">
          {topicNavbar.map((topic, index) => {
            return (
              <Link
                href={topic.href}
                className={`px-4 20-full  h-10 p-2 text-sm rounded-full   ${
                  index == 6
                    ? "bg-primary text-white hover:bg-accent-primary transition-all"
                    : "hover:text-primary hover:underline"
                }`}
                key={topic.name}
              >
                {topic.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
