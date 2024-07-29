"use client";
import { useEffect, useState } from "react";
import Section from "./Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Box from "./Box";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BUCKET_URL } from "@/services/utils";

export default function ClientsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const clients = [
    {
      name: "Navin",
      title: "Assistant Director",
      companyName: "Unacademy CA Category",
      image: "clientsCarousel/client1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Shwetha",
      title: "Associate Manager",
      companyName: "Unacademy CA Category",
      image: "clientsCarousel/client2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir.",
    },
    {
      name: "Raghav",
      title: "Associate Manager",
      companyName: "TBO Academy",
      image: "clientsCarousel/client3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section>
      <div className="mx-auto w-full rounded-[10px] bg-white shadow">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="">
            {clients.map((client, index) => (
              <CarouselItem key={index}>
                <Box className="h-full w-full rounded-bl-none rounded-br-none p-3 pb-6 shadow-none sm:flex sm:items-center sm:p-6 md:p-8 lg:px-7 lg:py-9">
                  <div className="flex flex-col sm:grid sm:grid-cols-2 sm:items-center sm:gap-5 md:gap-8">
                    <Image
                      src={`${BUCKET_URL}/${client.image}`}
                      alt={`${client.name}, ${client.title}, ${client.companyName}`}
                      loading="lazy"
                      width={600}
                      height={340}
                      className="mb-[14px] w-full sm:mb-0"
                      layout="responsive"
                    />
                    <div>
                      <p className="mb-5 text-[10px] font-light leading-[18px] text-neutral-900 sm:text-sm md:text-lg lg:text-xl">
                        {client.description}
                      </p>
                      <div className="flex flex-col font-extrabold text-neutral-900">
                        <span className="mb-2 text-base sm:text-lg">
                          {client.name}
                        </span>
                        <span className="text-xs sm:text-sm">
                          {client.title}
                        </span>
                        <span className="text-xs sm:text-sm">
                          {client.companyName}
                        </span>
                      </div>
                    </div>
                  </div>
                </Box>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden border-none shadow sm:flex" />
          <CarouselNext className="-right-4 hidden border-none shadow sm:flex" />
        </Carousel>
        <div className="flex w-full items-center justify-center gap-1 rounded-bl-[10px] rounded-br-[10px] bg-white pb-3 sm:gap-3 sm:pb-6">
          {clients.map((_, index) => (
            <div
              key={index}
              className={twMerge(
                `h-2 w-2 rounded-full border border-[#d9d9d9] sm:h-[10px] sm:w-[10px]`,
                current === index + 1 ? "bg-[#d9d9d9]" : "bg-white",
              )}
            ></div>
          ))}
        </div>
      </div>
    </Section>
  );
}
