import Image, { StaticImageData } from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Box from "./Box";
import Link from "next/link";
import Card from "./Card";

export default function Pricing() {
  const pricing = [
    {
      title: "GRAPHICS",
      startingPrice: "₹1499",
      discountedPrice: "₹999",
      description:
        "Contact us to know more about our services of Graphic Designs",
      link: "/",
    },
    {
      title: "VIDEOS",
      startingPrice: "₹3999",
      discountedPrice: "₹2999",
      description:
        "Contact us to know more about our services of Video Editing & Shoots",
      link: "/",
    },
    {
      title: "UI/UX",
      startingPrice: "₹11999",
      discountedPrice: "₹9999",
      description: "Contact us to know more about our services of UI/UX",
      link: "/",
    },
  ];
  return (
    <Section>
      <Heading>Pricing</Heading>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6 md:gap-8 2xl:gap-[40px]">
        {pricing.map((item) => (
          <Card
            key={item.title}
            className="flex flex-col items-center justify-center px-6 py-9 sm:px-6 sm:py-8 md:px-9 md:py-16"
          >
            <h3 className="mb-[10px] text-center text-base font-extrabold uppercase text-blue-950 sm:text-xl md:text-[32px]">
              {item.title}
            </h3>
            <span className="text-center text-xs font-light text-gray-600 md:text-base">
              Starting from
            </span>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full -rotate-12 rounded border border-zinc-400"></div>
              <span className="text-center text-xs font-light uppercase text-zinc-400 sm:text-base md:text-2xl">
                {item.startingPrice}
              </span>
            </div>
            <span className="mb-4 text-center text-2xl font-extrabold text-green-600 sm:text-[32px] md:text-5xl">
              {item.discountedPrice}
            </span>
            <span className="mb-4 text-center text-xs font-light text-zinc-700 md:mb-14 md:text-lg">
              {item.description}
            </span>
            <Link href={item.link}>
              <button className="rounded border-2 border-rose-500 px-[18px] py-3 text-center text-sm font-extrabold leading-none text-rose-500 hover:bg-rose-500 hover:text-white hover:shadow sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-3 md:text-2xl">
                Learn More
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
