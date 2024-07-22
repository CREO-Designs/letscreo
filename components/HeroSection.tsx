import Image from "next/image";
import banner from "@/public/banner.png";
import heroImage from "@/public/heroImage.png";

export default function HeroSection() {
  const organizationJsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CREO Designs",
    alternateName: "CREO",
    url: "https://letscreo.in",
    logo: "",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "7899861176",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi"],
    },
  };

  return (
    <>
      {/* padding on top for navbar display */}
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLD)}
      </script>
      <section
        id="home"
        className="relative flex w-full flex-col justify-center bg-center px-6 pb-9 pt-[5.589375rem] text-white sm:pb-[4.5rem] md:flex-row md:items-center md:justify-between md:gap-12 md:px-[5.25rem] md:pt-[6.839375rem] 2xl:px-[8.75rem] 2xl:pt-[7.839375rem]"
      >
        <Image
          className="absolute right-0 top-0 z-[1] h-full bg-cover"
          src={heroImage}
          alt="CREO banner"
          loading="lazy"
          width={1728}
          height={840}
        />
        <div className="z-[5] mb-9 flex flex-col items-center md:mb-0 md:items-start">
          <h1 className="mb-6 text-center text-[28px] font-extrabold leading-10 text-white sm:mb-8 sm:text-[70px] sm:leading-[90px] md:text-start 2xl:mb-[3.375rem] 2xl:text-8xl 2xl:leading-[100px]">
            Where Creativity
            <br />
            Meets Growth
          </h1>
          <h2 className="text-md mb-6 text-center font-light leading-loose text-white sm:mb-8 sm:text-lg sm:leading-[30px] md:text-start 2xl:mb-[3.375rem] 2xl:text-2xl 2xl:leading-10">
            We meet all your creative needs by providing you with your own
            dedicated Design Team, delivering customized assets tailored just
            for you.
          </h2>
          <button className="w-fit rounded-sm bg-rose-500 px-5 py-2 text-center font-extrabold leading-3 text-white hover:shadow-lg sm:mb-14 sm:text-xl">
            Contact Us
          </button>
        </div>
        <Image
          className="z-[5] aspect-[261/142] h-fit w-full rounded-[10px] border-4 border-white bg-no-repeat object-cover object-center md:aspect-[409/490] md:w-[25.5625rem]"
          src={banner}
          alt="CREO banner"
          loading="lazy"
          width={409}
          height={490}
        />
      </section>
    </>
  );
}
