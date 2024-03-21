import Banner from "@/components/Banner";
import Bootcamp from "@/components/Homepage/Bootcamp";
import Category from "@/components/Homepage/Category";
import OnlineCourse from "@/components/Homepage/OnlineCourse";
import Workshop from "@/components/Homepage/Workshop";

export default function Home() {
  return (
    <div className=" bg-[#white] min-h-[200vh] w-full">
      <div className="h-16"></div>
      <Banner />
      <section className="w-[75%] mx-auto">
        <Category></Category>
        <OnlineCourse></OnlineCourse>
        <Bootcamp></Bootcamp>
        <Workshop></Workshop>
      </section>
    </div>
  );
}
