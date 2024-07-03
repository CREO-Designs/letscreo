import Image from "next/image";
import React from "react";
import image1 from "@/public/brands/unacademy.png";
import image2 from "@/public/brands/tboacademy.png";
import image3 from "@/public/brands/ultimate-ca.png";
import image4 from "@/public/brands/vedantu.png";
import image5 from "@/public/brands/desi-fire-podcast.png";
import image6 from "@/public/brands/swapnil-patni-classes.png";
import image7 from "@/public/brands/bct.png";
import image8 from "@/public/brands/praana.png";

export default function BrandsShowcase() {
  const brands = [
    { src: image1, alt: "Unacademy" },
    { src: image2, alt: "TBO Academy" },
    { src: image3, alt: "Ultimate CA" },
    { src: image4, alt: "Vedantu" },
    { src: image5, alt: "Desi Fire Podcast" },
    { src: image6, alt: "Swapnil Patni's Classes" },
    { src: image7, alt: "BCT" },
    { src: image8, alt: "Praana" },
  ];
  return (
    <section className="mb-[10rem] px-4 pt-9 sm:px-8 sm:pt-16 md:px-14 lg:px-[88px] lg:pt-20 xl:px-[204px]">
      <h2 className="mb-5 text-center text-base font-extrabold text-blue-950 sm:mb-10 sm:text-2xl md:mb-12 md:text-4xl lg:mb-[54px] lg:text-[40px]">
        Brands That Love Our Designs
      </h2>
      <div className="grid grid-cols-3 justify-items-center gap-x-5 gap-y-2 rounded-[10px] bg-white py-4 shadow sm:gap-x-[72px] sm:gap-y-3 md:grid-cols-4 md:gap-x-[54px] md:gap-y-8 lg:gap-x-20 lg:gap-y-10">
        {brands.map((brand) => {
          return (
            <div
              key={brand.alt}
              className="aspect-[76/58] h-full w-full sm:aspect-[150/108] md:aspect-[208/150]"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
