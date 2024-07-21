import mainLogo from "@/public/main-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-6 px-4 py-4 sm:gap-12 sm:px-8 sm:py-12 md:grid md:grid-cols-2 md:px-14 lg:px-[88px] xl:px-[204px]">
        <div className="flex h-fit flex-col">
          <Image
            className="mb-2 h-[56px] w-[44px] sm:h-[120px] sm:w-[94px]"
            src={mainLogo}
            alt="CREO logo"
            width={94}
            height={120}
          />
          <p className="text-xs font-light leading-[18px] text-blue-950 sm:text-base sm:leading-normal lg:text-lg lg:leading-relaxed">
            We empower our clients to articulate themselves more effectively
            through our premium design services.
          </p>
        </div>
        <div className="flex flex-col gap-6 text-xs text-neutral-900 sm:grid sm:grid-cols-2 sm:text-base lg:text-xl">
          <ul className="flex flex-col gap-[14px] sm:gap-8 lg:gap-[30px]">
            <li className="font-extrabold">Services</li>
            <li>Graphic Design</li>
            <li>Videos</li>
            <li>UI/UI Design</li>
          </ul>
          <ul className="flex flex-col gap-[14px] sm:gap-8 lg:gap-[30px]">
            <li className="font-extrabold">Others</li>
            <li>Our Work</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-evenly bg-blue-950 px-4 py-3 text-xs font-light text-white sm:px-8 sm:py-[21px] sm:text-base md:px-14 md:text-lg lg:px-[88px] lg:text-xl xl:px-[204px]">
        <p>
          <a href="mailto:info@letscreo.in">info@letscreo.in</a>
        </p>
        <p>
          <a href="tel:+917899861176">+91 7899861176</a>
        </p>
      </div>
    </footer>
  );
}
