import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Link from "next/link";
import Card from "./Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { BUCKET_URL } from "@/services/utils";

export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      image: "services/services1.png",
      link: "/",
    },
    {
      title: "Video Editing & Shoots",
      image: "services/services2.png",
      link: "/",
    },
    {
      title: "UI/UX Design",
      image: "services/services3.png",
      link: "/",
    },
    {
      title: "Presentations and Pitch Decks",
      image: "services/services4.png",
      link: "/",
    },
  ];
  return (
    <Section>
      <Heading>Our Services</Heading>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6 md:gap-8 2xl:gap-[40px]">
        {services.map((item) => (
          <Link key={item.title} href={item.link}>
            <Card
              key={item.title}
              className="group relative cursor-pointer overflow-hidden"
            >
              <Image
                src={`${BUCKET_URL}/${item.image}`}
                alt={item.title}
                loading="lazy"
                className="object-fill object-center"
                height={400}
                width={640}
              />
              <div className="absolute bottom-0 flex h-1/2 w-full items-end justify-between gap-4 bg-gradient-to-b from-[#00000000] to-[#1B2B53E5] p-3 transition-all sm:p-4 sm:group-hover:h-full sm:group-hover:to-blue-950 md:p-6">
                <div className="">
                  <h3 className="text-base font-extrabold text-white sm:text-2xl md:text-4xl lg:text-[40px]">
                    {item.title}
                  </h3>
                  <span
                    // ! remember to fix the height
                    className="flex h-0 w-fit items-center justify-center overflow-hidden text-base font-light text-white underline transition-all sm:group-hover:h-6 md:text-2xl md:group-hover:h-8 lg:text-3xl lg:group-hover:h-9"
                  >
                    View More
                  </span>
                </div>
                <div className="gro flex aspect-square h-6 w-6 items-center justify-center rounded-full border border-white transition-all sm:h-8 sm:w-8 sm:border-2 sm:group-hover:scale-110 sm:group-hover:bg-white md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]">
                  <FaArrowRightLong className="text-sm text-white transition-all sm:text-lg sm:group-hover:scale-110 sm:group-hover:text-black md:text-2xl lg:text-3xl" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
