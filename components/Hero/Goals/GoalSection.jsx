import React from "react";

const GoalSection = () => {
  return (
    <section class="mt-20 w-full items-center border-b border-[#e5e5e5] sm:mt-28 sm:px-6">
      <div class="mx-auto flex max-w-7xl flex-col">
        <header class="flex flex-col items-center space-y-2 text-center">
          <h2 class="text-base font-medium uppercase tracking-wider text-[#707070]">
            How it works
          </h2>
          <h3 class="max-w-sm font-condensed text-4xl font-medium">
            Achieving your goal is more doable than ever.
          </h3>
        </header>
        <div class="mt-20 flex flex-col gap-10 sm:mt-24 sm:flex-row sm:gap-0">
          <div class="flex flex-col items-center border-b border-[#e5e5e5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 class="text-xl font-medium">Find your coach</h2>
            <p class="mt-1 max-w-80 text-[#707070]">
              Browse 500+ experts and schedule free intro calls to get to know
              each coach.
            </p>
            <img
              alt="Find your coach"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              class="mt-6"
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-1.0ea453a7.png&w=1920&q=75"
              className="text-transparent"
            />
          </div>
          <div class="flex flex-col items-center border-b border-[#e5e5e5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 class="text-xl font-medium">Get custom-tailored coaching</h2>
            <p class="mt-1 max-w-80 text-[#707070]">
              Your coach will help you make a concrete plan and work on each
              step with you.
            </p>
            <img
              alt="Get custom-tailored coaching"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              class="mt-6"
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-2.3ab4964d.png&w=1920&q=75"
              style={{color:"transparent"}}
            />
          </div>
          <div class="flex flex-col items-center border-b border-[#e5e5e5] px-8 text-center sm:border-b-0 sm:px-0">
            <h2 class="text-xl font-medium">Reach your goal</h2>
            <p class="mt-1 max-w-80 text-[#707070]">
              Work with your coach to achieve your goal within your timeline.
            </p>
            <img
              alt="Reach your goal"
              loading="lazy"
              width="653"
              height="716"
              decoding="async"
              data-nimg="1"
              class="mt-6"
              src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fimage-3.75ede286.png&w=1920&q=75"
              className="text-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
