import Image from "next/image";
import banner from "@/public/banner.png";

export default function Home() {
  return (
    <main className="w-full font-gilroy max-w-[100rem] mx-auto">
      {/* padding on top for navbar display */}
      {/* <section className="pt-[95.65px] px-36 bg-[#1E1E1E] text-white h-dvh flex justify-between items-center">
        <div>
          <h1 className="text-white font-gilroy text-8xl font-extrabold leading-[100px]">
            Where Creativity
            <br />
            Meets Growth
          </h1>
          <h2 className="w-[676px] text-white text-2xl leading-10">
            We meet all your creative needs by providing you with your own
            dedicated Design Team, delivering customized assets tailored just
            for you.
          </h2>
          <button>Contact Us</button>
        </div>
        <Image
          className="rounded-[10px] border-4 border-white"
          src={banner}
          alt="CREO banner"
          width={409}
          height={490}
        />
      </section> */}
    </main>
  );
}
