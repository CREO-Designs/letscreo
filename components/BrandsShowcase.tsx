import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Box from "./Box";
import { BUCKET_URL } from "@/services/utils";

export default function BrandsShowcase() {
  const brands = [
    { src: "brands/unacademy.png", alt: "Unacademy" },
    { src: "brands/tboacademy.png", alt: "TBO Academy" },
    { src: "brands/ultimate-ca.png", alt: "Ultimate CA" },
    { src: "brands/vedantu.png", alt: "Vedantu" },
    { src: "brands/desi-fire-podcast.png", alt: "Desi Fire Podcast" },
    { src: "brands/swapnil-patni-classes.png", alt: "Swapnil Patni's Classes" },
    { src: "brands/bct.png", alt: "BCT" },
    { src: "brands/praana.png", alt: "Praana" },
  ];
  return (
    <Section>
      <Heading>Brands That Love Our Designs</Heading>
      <Box className="grid grid-cols-3 justify-items-center gap-x-5 gap-y-2 px-[1.875rem] py-4 sm:gap-x-[72px] sm:gap-y-3 sm:px-[4.4375rem] sm:py-8 md:grid-cols-4 md:gap-x-[54px] md:gap-y-8 md:px-[5.4375rem] md:py-10 lg:gap-x-20 lg:gap-y-10 lg:px-24 lg:py-12 xl:px-[7.75rem]">
        {brands.map((brand) => {
          return (
            <div
              key={brand.alt}
              className="aspect-[76/58] h-full w-full sm:aspect-[150/108] md:aspect-[208/150]"
            >
              <Image
                src={`${BUCKET_URL}/${brand.src}`}
                alt={brand.alt}
                loading="lazy"
                className="h-full w-full object-contain"
                width={208}
                height={150}
              />
            </div>
          );
        })}
      </Box>
    </Section>
  );
}
