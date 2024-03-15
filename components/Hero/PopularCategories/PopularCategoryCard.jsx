import React from 'react'

const PopularCategoryCard = ({title}) => {
  return (
    <div
                class="swiper-slide w-[273px] mr-[16px] flex  items-center shrink-0 swiper-slide-next"
              >
                <a
                  class="group flex w-full flex-col"
                  href="/search/career/management-consulting"
                >
                  <img
                    alt="Law School Category Image"
                    loading="lazy"
                    width="548"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    class="h-auto w-full transition-opacity duration-150 sm:group-hover:opacity-70"
                    
                    src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fmba.7bc52547.png&w=1200&q=75"
                    
                  />
                  <span class="mt-4 transition-colors duration-150 sm:group-hover:text-[#707070]">
                    {title}
                  </span>
                </a>
              </div>
  )
}

export default PopularCategoryCard