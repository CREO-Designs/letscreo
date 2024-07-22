import Heading from "./Heading";
import Section from "./Section";
import benefit1 from "@/public/benefits/benefit1.png";
import benefit2 from "@/public/benefits/benefit2.png";
import benefit3 from "@/public/benefits/benefit3.png";
import benefit4 from "@/public/benefits/benefit4.png";
import benefit5 from "@/public/benefits/benefit5.png";
import benefit6 from "@/public/benefits/benefit6.png";
import benefit7 from "@/public/benefits/benefit7.png";
import benefit8 from "@/public/benefits/benefit8.png";
import benefit9 from "@/public/benefits/benefit9.png";
import Card from "./Card";
import Image from "next/image";

export default function Benefits() {
  const benefits = [
    {
      title: "Customized Designs",
      description:
        "Our expert designers carefully curate the assets to align perfectly with your specific needs and design sensibilities.",
      icon: benefit1,
    },
    {
      title: "Affordable Prices",
      description:
        "Our prices adhere to industry standards and are fair, ensuring they fit comfortably within your budget.",
      icon: benefit2,
    },
    {
      title: "Top-Tier Designers",
      description:
        "We have a team of premium designers who dedicate their utmost effort to deliver top-notch quality.",
      icon: benefit3,
    },
    {
      title: "Elite Video Editors",
      description:
        "Our team of expert video editors and cinematographers diligently work to deliver the quality you seek.",
      icon: benefit4,
    },
    {
      title: "Express Delivery",
      description:
        "We offer express delivery options to transform your last-minute creative ideas into the desired output promptly.",
      icon: benefit5,
    },
    {
      title: "Unlimited Designs",
      description:
        "Let your creativity flow freely—feel free to request as many creatives as you require. We prioritise them as per your need.",
      icon: benefit6,
    },
    {
      title: "Pre & Post Production Support",
      description:
        "Our team of cinematography experts assists in planning the shoots & executes the results according to your vision.",
      icon: benefit7,
    },
    {
      title: "Industry Standard Designs",
      description:
        "Our designs meet industry standards and exceed them, consistently delivering our best results to clients.",
      icon: benefit8,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We offer support for your creative needs whenever you require it. Contact us via phone or chat at your convenience.",
      icon: benefit9,
    },
  ];
  return (
    <Section>
      <Heading>Benefits of CREO</Heading>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 md:grid-cols-3 md:gap-8 lg:gap-x-8 lg:gap-y-6 2xl:gap-10">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="flex flex-col gap-[10px] p-4 sm:gap-3 md:p-6 lg:gap-4 lg:p-[30px]"
          >
            <div className="flex items-center justify-start gap-[10px] sm:gap-3 lg:gap-[14px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                loading="lazy"
                className="h-7 w-7 rounded-[4px] bg-[#FFE9EB] sm:h-9 sm:w-9 sm:rounded-[6px] lg:h-[50px] lg:w-[50px]"
                height={50}
                width={50}
                title={benefit.title}
              />
              <h3
                title={benefit.title}
                className="line-clamp-2 text-base font-extrabold text-neutral-900 sm:text-lg lg:text-2xl"
              >
                {benefit.title}
              </h3>
            </div>
            <p className="text-xs font-light leading-tight text-neutral-900 sm:text-sm lg:text-lg">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
