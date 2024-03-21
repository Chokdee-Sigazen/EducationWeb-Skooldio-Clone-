import Banner from "@/components/Banner";
import OnlineCourse from "@/components/Homepage/OnlineCourse";

export default function Home() {
  return (
    <div className=" bg-[#white] min-h-[200vh] w-full">
      <div className="h-16"></div>
      <Banner />
      <section className="w-[75%] mx-auto">
        <OnlineCourse></OnlineCourse>
      </section>
    </div>
  );
}
