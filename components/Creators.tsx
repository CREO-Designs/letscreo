import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Box from "./Box";
import { BUCKET_URL } from "@/services/utils";

export default function Creators() {
  const icons = {
    youtube: "creators/youtube-logo.png",
    instagram: "creators/instagram-logo.png",
  };
  const creators = [
    {
      src: "creators/creator1.jpg",
      name: "Shubham Pathak",
      icon: icons["youtube"],
      description: "975k followers",
    },
    {
      src: "creators/creator2.jpg",
      name: "Anuj Garg",
      icon: icons["youtube"],
      description: "534k followers",
    },
    {
      src: "creators/creator3.jpg",
      name: "Factovation",
      icon: icons["youtube"],
      description: "517k followers",
    },
    {
      src: "creators/creator4.jpg",
      name: "Harshita Singh (IITian)",
      icon: icons["youtube"],
      description: "122k followers",
    },
    {
      src: "creators/creator5.jpg",
      name: "Garima Bangar",
      icon: icons["youtube"],
      description: "70.6k followers",
    },
    {
      src: "creators/creator6.jpg",
      name: "Rushi Kale",
      icon: icons["youtube"],
      description: "61.5k followers",
    },
    {
      src: "creators/creator7.jpg",
      name: "Amrit Talks",
      icon: icons["youtube"],
      description: "58.5k followers",
    },
    {
      src: "creators/creator8.jpg",
      name: "Akansha Karnwal",
      icon: icons["youtube"],
      description: "49.2k followers",
    },
    {
      src: "creators/creator9.jpg",
      name: "CA Anshul Agrawal",
      icon: icons["youtube"],
      description: "40.2k followers",
    },
    {
      src: "creators/creator10.jpg",
      name: "Namo Kaul",
      icon: icons["youtube"],
      description: "39.9k followers",
    },
    {
      src: "creators/creator11.jpg",
      name: "Anand Prakash",
      description: "Co-Founder & Academic Head at Vedantu",
    },
    {
      src: "creators/creator12.jpg",
      name: "Honestly Payal",
      icon: icons["youtube"],
      description: "2.25k followers",
    },
    {
      src: "creators/creator13.jpg",
      name: "AkkabBakkadKids",
      icon: icons["youtube"],
      description: "1.53k followers",
    },
    {
      src: "creators/creator14.jpg",
      name: "Dilnawaz Khan",
      description: "Founder at Codesign Labs and Power Deck",
    },
    {
      src: "creators/creator15.jpg",
      name: "CA Ajay Vaswani",
      icon: icons["instagram"],
      description: "2.8k followers",
    },
    {
      src: "creators/creator16.jpg",
      name: "Aria Investments | Finance & Trading",
      icon: icons["instagram"],
      description: "1.7k followers",
    },
    {
      src: "creators/creator17.jpg",
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
              src={`${BUCKET_URL}/${creator.src}`}
              alt={`${creator.name} image`}
              loading="lazy"
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
                    src={`${BUCKET_URL}/${creator.icon}`}
                    alt="CREO logo"
                    loading="lazy"
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
              src={`${BUCKET_URL}/${creator.src}`}
              alt={`${creator.name} image`}
              loading="lazy"
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
                    src={`${BUCKET_URL}/${creator.icon}`}
                    alt="CREO logo"
                    loading="lazy"
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
