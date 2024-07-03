import React from "react";

export default function PromotionStrip() {
  return (
    <div className="mb-10 bg-[#E14C57] px-4 py-3 text-center text-xs leading-tight text-white sm:text-xl">
      <span className="font-extrabold">
        Exclusive Offer for the First Time Clients:{" "}
      </span>
      <br className="sm:hidden" />
      <span className="font-light">Get </span>
      <span className="font-extrabold">Flat 20% OFF</span>
      <span className="font-light"> on the entire bill for first 2 Months</span>
    </div>
  );
}
