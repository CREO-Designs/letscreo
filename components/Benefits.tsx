import Heading from "./Heading";
import Section from "./Section";
import Card from "./Card";
import Image from "next/image";
import { BUCKET_URL } from "@/services/utils";

export default function Benefits() {
  const benefits = [
    {
      title: "Customized Designs",
      description:
        "Our expert designers carefully curate the assets to align perfectly with your specific needs and design sensibilities.",
      icon: `benefits/benefit1.png`,
    },
    {
      title: "Affordable Prices",
      description:
        "Our prices adhere to industry standards and are fair, ensuring they fit comfortably within your budget.",
      icon: `benefits/benefit2.png`,
    },
    {
      title: "Top-Tier Designers",
      description:
        "We have a team of premium designers who dedicate their utmost effort to deliver top-notch quality.",
      icon: `benefits/benefit3.png`,
    },
    {
      title: "Elite Video Editors",
      description:
        "Our team of expert video editors and cinematographers diligently work to deliver the quality you seek.",
      icon: `benefits/benefit4.png`,
    },
    {
      title: "Express Delivery",
      description:
        "We offer express delivery options to transform your last-minute creative ideas into the desired output promptly.",
      icon: `benefits/benefit5.png`,
    },
    {
      title: "Unlimited Designs",
      description:
        "Let your creativity flow freely—feel free to request as many creatives as you require. We prioritize them as per your need.",
      icon: `benefits/benefit6.png`,
    },
    {
      title: "Pre & Post Production Support",
      description:
        "Our team of cinematography experts assists in planning the shoots & executes the results according to your vision.",
      icon: `benefits/benefit7.png`,
    },
    {
      title: "Industry Standard Designs",
      description:
        "Our designs meet industry standards and exceed them, consistently delivering our best results to clients.",
      icon: `benefits/benefit8.png`,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We offer support for your creative needs whenever you require it. Contact us via phone or chat at your convenience.",
      icon: `benefits/benefit9.png`,
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
                src={`${BUCKET_URL}/${benefit.icon}`}
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
