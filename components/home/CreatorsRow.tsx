import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Marquee } from "@/components/ui/marquee";
import { BUCKET_URL } from "@/services/utils";

const ICONS = {
  youtube: "creators/youtube-logo.png",
  instagram: "creators/instagram-logo.png",
};

const CREATORS = [
  { src: "creators/creator1.jpg", name: "Shubham Pathak", icon: ICONS.youtube, meta: "975k" },
  { src: "creators/creator2.jpg", name: "Anuj Garg", icon: ICONS.youtube, meta: "534k" },
  { src: "creators/creator3.jpg", name: "Factovation", icon: ICONS.youtube, meta: "517k" },
  { src: "creators/creator4.jpg", name: "Harshita Singh", icon: ICONS.youtube, meta: "122k" },
  { src: "creators/creator5.jpg", name: "Garima Bangar", icon: ICONS.youtube, meta: "70.6k" },
  { src: "creators/creator6.jpg", name: "Rushi Kale", icon: ICONS.youtube, meta: "61.5k" },
  { src: "creators/creator7.jpg", name: "Amrit Talks", icon: ICONS.youtube, meta: "58.5k" },
  { src: "creators/creator8.jpg", name: "Akansha Karnwal", icon: ICONS.youtube, meta: "49.2k" },
  { src: "creators/creator9.jpg", name: "CA Anshul Agrawal", icon: ICONS.youtube, meta: "40.2k" },
  { src: "creators/creator10.jpg", name: "Namo Kaul", icon: ICONS.youtube, meta: "39.9k" },
  { src: "creators/creator11.jpg", name: "Anand Prakash", meta: "Vedantu" },
  { src: "creators/creator14.jpg", name: "Dilnawaz Khan", meta: "Codesign Labs" },
  { src: "creators/creator15.jpg", name: "CA Ajay Vaswani", icon: ICONS.instagram, meta: "2.8k" },
  { src: "creators/creator16.jpg", name: "Aria Investments", icon: ICONS.instagram, meta: "1.7k" },
];

export default function CreatorsRow() {
  return (
    <Section spacing="default">
      <SectionHeader
        eyebrow="Creator collective"
        title={
          <>
            Built with the creators
            <br /> shaping the next decade.
          </>
        }
        lede="From educators to investors to lifestyle voices — we ship work that compounds audience, authority and revenue."
      />

      <div className="mt-16">
        <Marquee speed="slow" itemClassName="gap-6 pr-6">
          {CREATORS.map((c) => (
            <article
              key={c.name}
              className="flex w-[280px] shrink-0 items-center gap-4 rounded-md border border-line bg-white px-5 py-4 shadow-hairline"
            >
              <Image
                src={`${BUCKET_URL}/${c.src}`}
                alt={`${c.name}`}
                width={64}
                height={64}
                loading="lazy"
                className="size-14 rounded-full object-cover"
              />
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-display text-body font-medium text-ink">
                  {c.name}
                </span>
                <span className="flex items-center gap-1 text-eyebrow text-ink-500">
                  {c.icon && (
                    <Image
                      src={`${BUCKET_URL}/${c.icon}`}
                      alt=""
                      width={14}
                      height={14}
                      loading="lazy"
                      className="size-3"
                    />
                  )}
                  {c.meta}
                </span>
              </div>
            </article>
          ))}
        </Marquee>
      </div>

      <div className="mt-8">
        <Marquee
          speed="default"
          reverse
          itemClassName="gap-6 pr-6"
        >
          {CREATORS.slice()
            .reverse()
            .map((c) => (
              <article
                key={`r-${c.name}`}
                className="flex w-[280px] shrink-0 items-center gap-4 rounded-md border border-line bg-white px-5 py-4 shadow-hairline"
              >
                <Image
                  src={`${BUCKET_URL}/${c.src}`}
                  alt={`${c.name}`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="size-14 rounded-full object-cover"
                />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-display text-body font-medium text-ink">
                    {c.name}
                  </span>
                  <span className="flex items-center gap-1 text-eyebrow text-ink-500">
                    {c.icon && (
                      <Image
                        src={`${BUCKET_URL}/${c.icon}`}
                        alt=""
                        width={14}
                        height={14}
                        loading="lazy"
                        className="size-3"
                      />
                    )}
                    {c.meta}
                  </span>
                </div>
              </article>
            ))}
        </Marquee>
      </div>
    </Section>
  );
}
