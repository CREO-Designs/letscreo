import Image, { StaticImageData } from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Box from "./Box";
import Link from "next/link";
import Card from "./Card";
import { randomUUID } from "crypto";
import client1 from "@/public/clients/client1.png";
import client2 from "@/public/clients/client2.png";
import client3 from "@/public/clients/client3.png";

export default function Clients() {
  const clients = [
    {
      name: "Anand Prakash",
      title: "Co-Founder",
      companyName: "Vedantu",
      image: client1,
      videoURL:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      name: "Kashish",
      title: "Marketing Head",
      companyName: "TBO Academy",
      image: client2,
      videoURL:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      name: "Maleka Taj",
      title: "Category Head",
      companyName: "Unacademy",
      image: client3,
      videoURL:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];
  return (
    <Section>
      <Heading>Hear from our Clients</Heading>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 md:grid-cols-3 md:gap-8 2xl:gap-10">
        {clients.map((client) => (
          <Box key={randomUUID()} className="overflow-hidden">
            <video src={client.videoURL} className="w-full" controls></video>
            <div className="flex gap-3 p-6 lg:gap-4 lg:p-[22px]">
              <Image
                src={client.image}
                alt={client.companyName}
                loading="lazy"
                title={client.companyName}
                className="object-fit h-12 w-12 object-contain lg:h-[70px] lg:w-[70px]"
              />
              <div className="flex flex-col">
                <h3
                  title={client.name}
                  className="line-clamp-2 text-base font-extrabold text-neutral-900 sm:text-lg lg:text-xl"
                >
                  {client.name}
                </h3>
                <p className="line-clamp-1 text-sm font-extrabold text-neutral-900 sm:text-base">
                  {client.title}
                </p>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </Section>
  );
}
