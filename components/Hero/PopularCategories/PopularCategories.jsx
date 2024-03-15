import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";

const PopularCategories = () => {
  return (
    <section class="mx-auto mt-16 w-full max-w-7xl sm:mt-20 sm:px-6">
      <div class="flex w-full grow flex-col">
        <header class="flex items-center justify-between">
          <div class="space-y-4 px-6 pb-7 sm:space-y-1 sm:px-0">
            <h2 class="font-condensed text-4xl">Popular Categories</h2>
            <h3 class="text-lg text-[#707070] sm:text-xl"><a class="underline underline-offset-2" href="/search/school">Get into school</a>, <a class="underline underline-offset-2" href="/search/career">build your career</a>, or <a class="underline underline-offset-2" href="/search/test">take a test</a>.</h3>
          </div>
          <div class="ml-6 hidden gap-2 sm:flex">
            <button
              type="button"
              class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-leland-gray-dark bg-white border-leland-gray-stroke hover:bg-leland-gray-hover shadow-transparent p-2 text-sm  space-x-1 inline-flex font-medium rounded-full cursor-not-allowed opacity-50"
              aria-label="<"
              disabled=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-3.5 h-3.5"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.5 15 10 11.5 13.5 8"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-leland-gray-dark bg-white border-leland-gray-stroke hover:bg-leland-gray-hover shadow-transparent p-2 text-sm  space-x-1 inline-flex font-medium rounded-full cursor-pointer"
              aria-label=">"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-3.5 h-3.5"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m10 15 3.5-3.5L10 8"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        <div class="relative flex min-h-8 w-full">
          <div class="swiper swiper-initialized swiper-horizontal block w-full touch-pan-y overflow-x-hidden text-clip py-0">
            <div class="swiper-wrapper w-full flex px-6 overflow-x-scroll no-scrollbar">
              <PopularCategoryCard title="MBA"/>      
              <PopularCategoryCard title="Management Consulting"/>      
              <PopularCategoryCard title="GMAT"/>      
              <PopularCategoryCard title="Medical School"/>        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
