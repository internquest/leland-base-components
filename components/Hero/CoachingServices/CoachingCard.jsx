import React from "react";

const CoachingCard = ({coachName,}) => {
  return (
    <div
      className="swiper-slide flex w-auto max-w-[240px] sm:max-w-[300px]  items-center shrink-0 swiper-slide-active mr-[18px]"
    >
      <div className="w-full pb-2">
        <a
          className="relative flex w-full flex-col items-center justify-between rounded-3xl border border-[#e5e5e5] bg-white shadow-md transition-all duration-150 hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="flex h-52 w-full flex-col items-center border-b border-[#e5e5e5] p-5 text-center">
            <div className="relative mb-4 size-20">
              <img
                alt="Lola A."
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-full object-cover absolute h-full w-full inset-0 text-transparent"
                sizes="80px"
                src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fleland.imgix.net%2Fprofile-photos%2F63a2f96c0e69125cc9ec6321.jpeg&w=128&q=75"
              />
            </div>
            <p className="text-xl font-medium text-[#333]">{coachName}</p>
            <p className="line-clamp-2 text-[#707070]">
              Business Strategy &amp; Operations, Product Management, Management
              Consulting and College Coach
            </p>
          </div>
          <div className="flex min-h-0 w-full flex-1 flex-col space-y-5 p-5">
            <div className="flex items-center">
              <div className="relative size-10">
                <img
                  alt="Stripe"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                  sizes="40px"
                  src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fstripe.b0a686c2.png&w=96&q=75"
                  
                />
              </div>
              <div className="pl-3">
                <p className="line-clamp-1 font-medium text-[#333]">
                  Stripe
                </p>
                <p className="line-clamp-1 text-sm text-[#707070]">
                  Strategy &amp; Product
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative size-10">
                <img
                  alt="McKinsey &amp; Company"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="size-10 rounded object-cover absolute h-full w-full inset-0 text-transparent"
                  sizes="40px"
                  src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fmckinsey_co.6aedac00.jpg&w=96&q=75"
                />
              </div>
              <div className="pl-3">
                <p className="line-clamp-1 font-medium text-[#333]">
                  McKinsey &amp; Company
                </p>
                <p className="line-clamp-1 text-sm text-[#707070]">
                  Business Analyst
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CoachingCard;
