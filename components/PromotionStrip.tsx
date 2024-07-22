"use client";
import { useEffect } from "react";
import "./PromotionStrip.css";

export default function NewReviewSection() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(
        !!scrollerInner ? scrollerInner.children : [],
      );

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as Element;
        duplicatedItem.setAttribute("aria-hidden", "true");
        if (scrollerInner) scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <>
      <section className="promotion-strip !hidden flex-col items-center justify-center gap-6 sm:!flex">
        <div className="scroller flex w-full items-center justify-center gap-4">
          <div className="bg-[#E14C57] px-4 py-3 text-center text-xs leading-tight text-white sm:text-xl">
            <div className="scroller__inner flex w-full flex-wrap gap-4">
              <div className="mx-[3rem] lg:mx-[11rem] xl:mx-[27rem] 2xl:mx-[27rem]">
                <span className="font-extrabold">
                  Exclusive Offer for the First Time Clients:{" "}
                </span>
                <br className="sm:hidden" />
                <span className="font-light">Get </span>
                <span className="font-extrabold">Flat 20% OFF</span>
                <span className="font-light">
                  {" "}
                  on the entire bill for first 2 Months
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="visible bg-[#E14C57] px-4 py-3 text-center text-xs leading-tight text-white sm:hidden sm:text-xl">
        <span className="font-extrabold">
          Exclusive Offer for the First Time Clients:{" "}
        </span>
        <br className="sm:hidden" />
        <span className="font-light">Get </span>
        <span className="font-extrabold">Flat 20% OFF</span>
        <span className="font-light">
          {" "}
          on the entire bill for first 2 Months
        </span>
      </div>
    </>
  );
}
