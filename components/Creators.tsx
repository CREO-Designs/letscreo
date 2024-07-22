import Image, { StaticImageData } from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import defaultImage from "@/public/creators/default.png";
import creator1 from "@/public/creators/creator1.jpg";
import creator2 from "@/public/creators/creator2.jpg";
import creator3 from "@/public/creators/creator3.jpg";
import creator4 from "@/public/creators/creator4.jpg";
import creator5 from "@/public/creators/creator5.jpg";
import creator6 from "@/public/creators/creator6.jpg";
import creator7 from "@/public/creators/creator7.jpg";
import creator8 from "@/public/creators/creator8.jpg";
import creator9 from "@/public/creators/creator9.jpg";
import creator10 from "@/public/creators/creator10.jpg";
import creator11 from "@/public/creators/creator11.jpg";
import creator12 from "@/public/creators/creator12.jpg";
import creator13 from "@/public/creators/creator13.jpg";
import creator14 from "@/public/creators/creator14.jpg";
import creator15 from "@/public/creators/creator15.jpg";
import creator16 from "@/public/creators/creator16.jpg";
import creator17 from "@/public/creators/creator17.jpg";
import youtubeLogo from "@/public/creators/youtube-logo.png";
import instagramLogo from "@/public/creators/instagram-logo.png";
import Box from "./Box";

type creatorsType = {
  src: StaticImageData;
  name: string;
  icon?: StaticImageData;
  description: string;
}[];

export default function Creators() {
  const icons = {
    youtube: youtubeLogo,
    instagram: instagramLogo,
  };
  const creators: creatorsType = [
    {
      src: creator1,
      name: "Shubham Pathak",
      icon: icons["youtube"],
      description: "975k followers",
    },
    {
      src: creator2,
      name: "Anuj Garg",
      icon: icons["youtube"],
      description: "534k followers",
    },
    {
      src: creator3,
      name: "Factovation",
      icon: icons["youtube"],
      description: "517k followers",
    },
    {
      src: creator4,
      name: "Harshita Singh (IITian)",
      icon: icons["youtube"],
      description: "122k followers",
    },
    {
      src: creator5,
      name: "Garima Bangar",
      icon: icons["youtube"],
      description: "70.6k followers",
    },
    {
      src: creator6,
      name: "Rushi Kale",
      icon: icons["youtube"],
      description: "61.5k followers",
    },
    {
      src: creator7,
      name: "Amrit Talks",
      icon: icons["youtube"],
      description: "58.5k followers",
    },
    {
      src: creator8,
      name: "Akansha Karnwal",
      icon: icons["youtube"],
      description: "49.2k followers",
    },
    {
      src: creator9,
      name: "CA Anshul Agrawal",
      icon: icons["youtube"],
      description: "40.2k followers",
    },
    {
      src: creator10,
      name: "Namo Kaul",
      icon: icons["youtube"],
      description: "39.9k followers",
    },
    {
      src: creator11,
      name: "Anand Prakash",
      description: "Co-Founder & Academic Head at Vedantu",
    },
    {
      src: creator12,
      name: "Honestly Payal",
      icon: icons["youtube"],
      description: "2.25k followers",
    },
    {
      src: creator13,
      name: "AkkabBakkadKids",
      icon: icons["youtube"],
      description: "1.53k followers",
    },
    {
      src: creator14,
      name: "Dilnawaz Khan",
      description: "Founder at Codesign Labs and Power Deck",
    },
    {
      src: creator15,
      name: "CA Ajay Vaswani",
      icon: icons["instagram"],
      description: "2.8k followers",
    },
    {
      src: creator16,
      name: "Aria Investments | Finance & Trading",
      icon: icons["instagram"],
      description: "1.7k followers",
    },
    {
      src: creator17,
      name: "Just Payal",
      icon: icons["youtube"],
      description: "134 followers",
    },
  ];
  return (
    <Section>
      <Heading>Individual Creators who are associated with us</Heading>
      <Box className="flex flex-col gap-4 p-4 sm:hidden">
        {creators.map((creator) => (
          <div
            key={creator.name}
            className="flex items-center justify-start gap-3"
          >
            <Image
              className="h-14 w-14 rounded-full"
              src={creator.src}
              alt={`${creator.name} image`}
              width={80}
              height={80}
            />
            {/* gap-1 */}
            <div className="flex flex-col">
              <span className="line-clamp-2 break-words text-base font-extrabold text-neutral-900">
                {creator.name}
              </span>
              <div className="flex items-center gap-1">
                {creator?.icon && (
                  <Image
                    className="h-4 w-4 rounded-full"
                    src={creator.icon}
                    alt="CREO logo"
                    width={20}
                    height={20}
                  />
                )}
                <span
                  title={creator.description}
                  className="line-clamp-2 break-words text-xs font-light text-neutral-900"
                >
                  {creator.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Box>
      <div className="hidden grid-cols-3 gap-x-6 gap-y-5 sm:grid">
        {creators.map((creator) => (
          <Box
            key={creator.name}
            className="group flex items-center justify-start gap-[10px] p-4 transition hover:bg-[#1B2B53] md:gap-[18px] md:p-6 lg:gap-6 lg:p-[30px]"
          >
            <Image
              className="h-14 w-14 rounded-full md:h-20 md:w-20"
              src={creator.src}
              alt={`${creator.name} image`}
              width={80}
              height={80}
            />
            <div className="flex flex-col">
              <span
                style={{
                  wordBreak: "break-word",
                }}
                title={creator.name}
                className="line-clamp-2 break-words text-base font-extrabold text-neutral-900 group-hover:text-white md:text-2xl"
              >
                {creator.name}
              </span>
              <div className="flex items-center gap-1">
                {creator?.icon && (
                  <Image
                    className="h-4 w-4 rounded-full md:h-5 md:w-5"
                    src={creator.icon}
                    alt="CREO logo"
                    width={20}
                    height={20}
                  />
                )}
                <span
                  title={creator.description}
                  className="line-clamp-2 break-words text-xs font-light text-neutral-900 group-hover:text-white md:text-lg"
                >
                  {creator.description}
                </span>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </Section>
  );
}
