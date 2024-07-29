import Image from "next/image";
import Section from "./Section";
import { BUCKET_URL } from "@/services/utils";

export default function ContactUs() {
  return (
    <Section className="relative mt-14 overflow-hidden bg-gradient-to-b from-[#FBD0C9] to-[#F8DCC7] py-[34px] sm:py-16 md:py-[72px] lg:py-[77px]">
      <div className="flex flex-col gap-6 sm:gap-10 md:gap-[54px] lg:gap-[77px]">
        <p className="text-base font-extrabold leading-relaxed text-neutral-900 sm:w-[70%] sm:text-2xl sm:leading-10 md:text-4xl md:leading-[50px] lg:text-[40px] lg:leading-[60px]">
          {
            "Whether you're an individual creator or a well-established business, we're here to assist you in saving both time and money"
          }
        </p>
        <button className="w-fit rounded-sm bg-rose-500 px-[19px] py-[14px] text-center text-sm font-extrabold leading-3 text-white transition-shadow hover:shadow-lg sm:p-6 sm:py-3 sm:text-xl sm:leading-tight lg:text-2xl lg:leading-10">
          Contact Us
        </button>
      </div>
      <Image
        src={`${BUCKET_URL}/contactUsAvatar.png`}
        alt="Contact Us"
        loading="lazy"
        width={533}
        height={533}
        className="absolute -bottom-2 right-0 h-[143px] w-[143px] sm:-right-10 sm:bottom-1/2 sm:h-[341px] sm:w-[341px] sm:translate-y-1/2 md:h-[452px] md:w-[452px] lg:right-0 lg:h-[533px] lg:w-[533px]"
      />
    </Section>
  );
}
