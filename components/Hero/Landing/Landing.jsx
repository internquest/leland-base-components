import React from 'react'
import Button from '../Button'

const Landing = () => {
  return (
    <section className="mx-auto flex w-full flex-col justify-center text-center">
        <header className="space-y-5 px-6 sm:space-y-4 ">
          <h2 className={`font-condensed text-5xl font-medium `}>
            Find a coach to help you achieve your goals.
          </h2>
          <h3 className="text-xl text-[#707070]">
            Search 500+ experts across more than 50 career &amp; admissions
            categories.
          </h3>
        </header>
        <div class="flex flex-col items-center justify-center px-6">
          <div class="mt-12 flex w-full flex-col space-y-2 rounded-xl border border-[#e5e5e5] p-2 shadow-md md:h-20 md:w-min md:flex-row md:items-center md:space-x-2 md:space-y-0 font-calibre">
            <div class="h-16 rounded-lg md:h-full relative">
              <div class="h-full">
                <button
                  type="button"
                  class="flex size-full min-w-[13.75rem] cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-leland-gray-hover  "
                >
                  <div class="flex w-full items-center justify-between">
                    <div class="flex w-full items-center text-lg font-medium text-[#333333]">
                      <input
                        class="w-full bg-transparent outline-none focus:outline-none cursor-pointer placeholder:text-[#333333] placeholder:font-bold"
                        placeholder="Select your goal"
                        readonly=""
                        value=""
                      />
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="size-4 text-leland-gray-extra-light"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m6 9 6 6 6-6"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="md:h-full md:py-2">
              <div class="h-[1px] w-full bg-[#e5e5e5] md:h-full md:w-[1px]"></div>
            </div>
            <div class="h-16 md:h-full md:min-w-[16.25rem] relative">
              <div class="h-full">
                <button
                  type="button"
                  class="flex size-full min-w-55 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-leland-gray-hover pointer-events-none  opacity-50 "
                  disabled=""
                >
                  <div class="flex w-full items-center justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      fill="none"
                      class="mr-2.5 text-leland-gray-extra-light"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9.667 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM18 17.5l-3.625-3.625"
                      ></path>
                    </svg>
                    <div class="flex w-full items-center text-lg font-medium text-leland-gray-dark">
                      <input
                        class="w-full bg-transparent outline-none focus:outline-none cursor-pointer placeholder:text-leland-gray-dark "
                        placeholder="Select a category"
                        readonly=""
                        required=""
                        value=""
                      />
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="size-4 text-leland-gray-extra-light"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m6 9 6 6 6-6"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <a class="whitespace-nowrap" href="">
              <button
                type="button"
                class="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border text-white bg-[#15b078] border-[#15b078] hover:bg-[#15b078]-hover hover:border-[#15b078]-hover shadow-transparent py-4 px-5 text-base space-x-2 flex w-full sm:w-auto sm:inline-flex font-medium rounded-lg cursor-not-allowed opacity-50"
                aria-label="Find coaching"
                disabled=""
              >
                <span>Find coaching</span>
              </button>
            </a>
          </div>
          <div class="mt-6 hidden items-center justify-start md:flex">
            <p class="mr-3 text-base font-medium text-leland-gray-dark">
              Popular:
            </p>
            <div class="grid auto-cols-min grid-flow-col gap-1.5 whitespace-nowrap">
              <Button title="MBA"/>
              <Button title="Management Consulting"/>
              <Button title="GMAT"/>
              <Button title="Medical School"/>
            </div>
          </div>
        </div>
        <p class="mt-20 px-6 text-sm uppercase tracking-wider text-[#707070] sm:mt-32">JOIN 50,000+ Real people achieving their goals on Leland</p>
        <div class="mt-6">
  <div class="flex w-full grow flex-col">
    <div class="relative flex min-h-8 w-full">
      <div class=" block w-full touch-pan-y overflow-x-hidden text-clip py-0">
        <div class="w-full flex">
          <div class=" flex w-auto items-center shrink-0 mr-[20px] animate-loop-scroll">
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
            <img className="mr-[20px]" alt="Customer outcome 12" loading="lazy" width="132" height="132" decoding="async" data-nimg="1" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Foutcome01.d1fc0e2c.png&w=384&q=75" style={{color:"transparent"}}/>
          <div/>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
  )
}

export default Landing