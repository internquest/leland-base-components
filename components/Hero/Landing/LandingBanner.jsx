import React from "react";

const LandingBanner = () => {
  return (
    <section class="mt-4 flex flex-wrap items-center justify-center gap-6 bg-[#000000] px-6 py-8 text-white sm:gap-14">
      <span class="text-lg font-medium">Featured in</span>
      <a
        class="transition-opacity duration-200 ease-in-out hover:opacity-70"
        href="https://www.forbes.com/sites/rodberger/2022/05/23/democratizing-the-college-admissions-process-is-big-business/?sh=26db187369c9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="22"
          fill="none"
        >
          <g clip-path="url(#forbes-logo_svg__a)">
            <path
              fill="#fff"
              d="M7.798 2.37h1.775a5.977 5.977 0 0 1 3.19.404 5.65 5.65 0 0 1 2.553 3.409c.265.747.265.747.903.482h.498V.751H.016v1.042H.7a1.992 1.992 0 0 1 1.556.732c.638 1.027.747 2.179.747 8.172 0 6.366-.14 7.922-.747 8.716a1.682 1.682 0 0 1-1.292.685c-.95.17-.95.155-.95.576a.623.623 0 0 0 0 .435h10.538a.981.981 0 0 0 0-.887 5.37 5.37 0 0 0-.778-.155 5.2 5.2 0 0 1-.84-.172 2.802 2.802 0 0 1-1.137-2.537c-.155-1.027-.233-2.91-.233-4.467v-1.23h.622c.776-.023 1.551.06 2.304.25a2.88 2.88 0 0 1 1.339 2.054l.14.483h.95V7.552h-.873l-.14.67a2.77 2.77 0 0 1-1.416 2.054c-.368.11-.756.136-1.136.078h-1.79v-1.68c0-1.744.093-5.417.155-5.993l.078-.312Zm72.843 12.342a5.65 5.65 0 0 0-3.222-2.444 7.783 7.783 0 0 1-2.786-1.556 1.556 1.556 0 0 1-.45-1.385c0-.491.196-.961.544-1.308a1.884 1.884 0 0 1 1.868-.513 3.922 3.922 0 0 1 2.755 2.926c.249.7.28.7.731.513l.28-.108V6.96l-.202-.093a12.032 12.032 0 0 0-4.779-.654 5.603 5.603 0 0 0-3.735 1.556 4.295 4.295 0 0 0-1.354 3.362 3.689 3.689 0 0 0 1.058 2.553 6.317 6.317 0 0 0 2.646 1.556c2.413.95 3.113 1.557 3.113 2.662a2.054 2.054 0 0 1-1.556 2.039c-.544.12-1.107.12-1.65 0a4.795 4.795 0 0 1-2.91-3.284l-.203-.498h-.28c-.134.01-.266.041-.39.093h-.155v4.42h.265c1.051.35 2.136.59 3.237.717h1.557a6.102 6.102 0 0 0 2.007-.187 4.84 4.84 0 0 0 3.674-3.113c.185-.444.28-.92.28-1.401a3.875 3.875 0 0 0-.343-1.977ZM65.98 6.665a7.175 7.175 0 0 0-5.867.14 6.834 6.834 0 0 0-3.565 4.25 8.312 8.312 0 0 0-.42 3.112 8.518 8.518 0 0 0 .14 1.713 6.911 6.911 0 0 0 5.588 5.572c.904.114 1.82.114 2.724 0a7.47 7.47 0 0 0 2.646-1.012 4.67 4.67 0 0 0 1.65-1.556.778.778 0 0 0-.374-.483 2.015 2.015 0 0 0-.498.265 4.45 4.45 0 0 1-2.615.731 4.156 4.156 0 0 1-3.315-1.307 3.72 3.72 0 0 1-.794-1.059 7.237 7.237 0 0 1-.763-3.113v-.607h8.623v-.31a7.658 7.658 0 0 0 0-.935 6.227 6.227 0 0 0-3.16-5.4Zm-4.342 5.386h-1.09v-.919c.358-2.35 1.245-3.75 2.335-3.75 1.09 0 1.557 1.384 1.759 3.921v.716h-.934l-2.07.032Zm-22.382-5.9a3.269 3.269 0 0 0-1.557.327 5.215 5.215 0 0 0-2.412 2.413l-.203.374V6.152h-.078c-.186 0-5.945 1.151-6.132 1.23-.187.077-.125.093-.125.373s0 .327.125.342l.607.125a1.12 1.12 0 0 1 .872.451c.389.514.467 1.416.467 5.261.076 1.73.004 3.465-.218 5.183a1.276 1.276 0 0 1-1.074 1.012l-.53.109h-.202v.436a.622.622 0 0 0 0 .45h8.7v-.45c.031-.15.031-.303 0-.452a8.7 8.7 0 0 1-1.556-.202 1.557 1.557 0 0 1-.825-1.557c-.124-.902-.186-3.549-.155-5.572s0-2.148.171-2.288c.52-.4 1.165-.603 1.821-.576a4.063 4.063 0 0 1 1.774.452c.191.105.395.184.608.233 0 0 1.556-3.767 1.556-3.938a1.836 1.836 0 0 0-1.634-.622Zm-10.49 6.538a6.99 6.99 0 0 0-3.207-5.541 8.094 8.094 0 0 0-7.285-.203 7.036 7.036 0 0 0-3.408 4.047 10.399 10.399 0 0 0 0 5.977 6.521 6.521 0 0 0 1.665 2.817 6.319 6.319 0 0 0 3.596 1.744c.87.072 1.744.072 2.614 0 .32-.05.638-.117.95-.203a6.927 6.927 0 0 0 4.965-5.525c.155-1.03.192-2.075.11-3.113Zm-6.476 7.782c-1.556.467-2.724-1.043-3.113-4.218a29.168 29.168 0 0 1 0-4.996c.312-2.553 1.105-3.845 2.335-3.845a1.557 1.557 0 0 1 1.307.576c1.043 1.043 1.557 3.113 1.557 6.226.13 1.762-.148 3.53-.81 5.168a2.365 2.365 0 0 1-1.276 1.011v.078ZM50.306 6.463a5.183 5.183 0 0 0-1.323 0c-.843 0-1.677.18-2.444.53l-.483.201V3.817c.085-1.14.085-2.285 0-3.424-.186 0-6.132 1.136-6.225 1.183a.483.483 0 0 0 0 .358c0 .326 0 .31.7.466.197.045.386.118.56.218.304.286.506.663.576 1.074.177 1.185.235 2.384.172 3.58v13.666l.42.094c.622.14 2.381.435 2.957.498 1.15.091 2.305.091 3.455 0a7.051 7.051 0 0 0 5.822-4.374c.286-.764.484-1.557.591-2.366a14.007 14.007 0 0 0-.109-3.284 5.992 5.992 0 0 0-4.67-5.043Zm-4.078 13.744c0-.203-.156-7.02-.125-9.744V8.331l.452-.11c.304-.043.613-.043.918 0 .337-.034.675.043.965.219a4.67 4.67 0 0 1 2.008 3.548 17.119 17.119 0 0 1 0 3.409 7.487 7.487 0 0 1-1.806 4.467c-.306.29-.69.485-1.105.56a2.772 2.772 0 0 1-.95 0c-.295 0-.295-.093-.295-.217h-.062Z"
            ></path>
          </g>
          <defs>
            <clipPath id="forbes-logo_svg__a">
              <path fill="#fff" d="M0 .393h80.999v21.215H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        class="transition-opacity duration-200 ease-in-out hover:opacity-70"
        href="https://www.businessinsider.com/most-promising-edtech-startups-2023-vc-2023-9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="32"
          fill="none"
        >
          <g clip-path="url(#business-insider-logo_svg__a)">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M7.982 32h2.396V19.2H7.982V32Zm8.783-.192h2.146v-8.076L27.944 32V19.392h-2.14v7.938l-9.039-8.13v12.608Zm16.078-3.1c1.168.91 2.57 1.436 4.073 1.436 1.464 0 2.491-.504 2.491-1.617 0-.97-.655-1.35-1.802-1.775l-1.857-.645c-1.712-.608-3.014-1.496-3.014-3.537 0-2.183 1.971-3.37 4.328-3.37 1.444 0 2.76.363 3.788 1.006v2.165c-1.069-.79-2.239-1.334-3.742-1.334-1.294 0-2.261.483-2.261 1.49 0 .91.607 1.274 1.676 1.64l2.069.726c2.005.705 2.925 1.798 2.925 3.596 0 2.262-1.99 3.511-4.601 3.511-1.716 0-3.175-.48-4.073-1.086v-2.206ZM47.107 32h2.395V19.2h-2.395V32Zm13.631-1.937c2.7 0 4.143-1.732 4.143-4.466 0-2.754-1.444-4.48-4.143-4.48h-2.67v8.946h2.67ZM55.888 19.2h4.93c3.795 0 6.249 2.5 6.249 6.397 0 3.9-2.454 6.403-6.249 6.403h-4.93V19.2Zm23.157 0v1.917h-5.797v3.08h5.199v1.895h-5.2v3.971h5.798V32H71.06V19.2h7.985Zm8.502 5.796h2.377c1.407 0 2.2-.772 2.2-1.959s-.793-1.96-2.2-1.96h-2.377v3.919Zm0 1.81V32h-2.115V19.2h4.532c2.584 0 4.256 1.331 4.256 3.837 0 2.143-.928 3.374-2.905 3.69L95.812 32h-2.406l-4.354-5.193h-1.504v-.001ZM7.145 6.59c.937-.343 1.667-1.372 1.667-2.787 0-2.358-1.667-3.58-4.334-3.58h-4.48v13.163h4.896c2.667 0 4.334-1.308 4.334-3.773 0-1.394-.875-2.616-2.083-3.023Zm-5.043-.836V2.153h2.356c1.48 0 2.271.536 2.271 1.779 0 1.243-.792 1.822-2.271 1.822H2.102Zm0 1.844h2.75c1.46 0 2.251.728 2.251 1.929 0 1.179-.792 1.93-2.25 1.93h-2.75v-3.86l-.001.001ZM19.003 13.6c3.063 0 5.126-1.844 5.126-5.445V.223h-2.167v7.674c0 2.53-1.042 3.71-2.959 3.71s-2.958-1.18-2.958-3.71V.223h-2.167v7.91c0 3.623 2.083 5.467 5.125 5.467Zm10.228-1.158c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.33 4.584-3.73 0-1.908-.916-3.066-2.917-3.816l-2.062-.772c-1.063-.385-1.667-.771-1.667-1.736 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.578 3.73 1.415V1.08C36.191.395 34.878.009 33.44.009c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.558-4.063-1.522v2.336ZM45.621.223h-2.166v13.162h2.166V.223Zm6.182 13.146h2.088V4.806l8.788 8.767V.203h-2.082V8.62L51.803 0v13.369ZM76.22.226v1.971h-5.626v3.168h5.045v1.949h-5.045v4.083h5.626v1.992h-7.75V.226h7.75Zm5.045 12.207c.896.644 2.354 1.158 4.063 1.158 2.604 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.063-.386-1.667-.772-1.667-1.737 0-1.072.958-1.586 2.25-1.586 1.5 0 2.667.579 3.73 1.415V1.072C88.224.386 86.911 0 85.473 0c-2.354 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.02 1.715-2.48 1.715-1.5 0-2.896-.557-4.062-1.522v2.336Zm13.086 0c.896.644 2.355 1.158 4.063 1.158 2.605 0 4.584-1.329 4.584-3.73 0-1.908-.917-3.065-2.917-3.816l-2.063-.771c-1.062-.386-1.667-.772-1.667-1.737 0-1.072.959-1.586 2.25-1.586 1.5 0 2.668.579 3.73 1.415V1.072C101.311.386 99.998 0 98.56 0c-2.355 0-4.313 1.265-4.313 3.58 0 2.165 1.292 3.108 3 3.751l1.855.686c1.146.45 1.792.858 1.792 1.887 0 1.179-1.021 1.715-2.48 1.715-1.5 0-2.896-.557-4.063-1.522v2.336Z"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="business-insider-logo_svg__a">
              <path fill="#fff" d="M-.002 0h103v32h-103z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        class="transition-opacity duration-200 ease-in-out hover:opacity-70"
        href="https://techcrunch.com/2022/05/11/leland-coaching-seed-round/#!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="24"
          fill="none"
        >
          <g fill="#fff" clip-path="url(#tech-crunch-logo_svg__a)">
            <path d="M23.998 0v8h-8v16h-8V8h-8V0h24ZM47.998 0h-16v8h16V0Z"></path>
            <path d="M47.998 16v8h-24V8h8v8h16Z"></path>
          </g>
          <defs>
            <clipPath id="tech-crunch-logo_svg__a">
              <path fill="#fff" d="M-.002 0h48v24h-48z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        class="transition-opacity duration-200 ease-in-out hover:opacity-70"
        href="https://www.protocol.com/workplace/expanding-executive-coaching"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117"
          height="28"
          fill="none"
        >
          <g fill="#fff" clip-path="url(#protocol-logo_svg__a)">
            <path d="M6.867 7.837c.572-.394 1.073-.804 1.633-1.11a5.422 5.422 0 0 1 3.087-.654c1.944.171 3.565 1.024 4.85 2.513.739.856 1.231 1.844 1.587 2.898.148.437.143.927.213 1.39.101.672.08 1.333.028 2.018-.123 1.59-.716 2.945-1.664 4.193-.749.988-1.707 1.684-2.815 2.194a6.019 6.019 0 0 1-3.518.484c-1.077-.174-2.114-.563-2.912-1.388-.087-.09-.216-.138-.326-.206-.03.123-.086.246-.088.37-.009.855.008 1.71-.013 2.564-.009.378.14.492.497.48.536-.02 1.074.002 1.612-.007.362-.006.535.126.528.516a97.599 97.599 0 0 0-.002 2.93c.006.422-.165.58-.592.578-2.796-.012-5.593-.005-8.388-.006-.54 0-.576-.04-.578-.59-.001-.989.008-1.978-.004-2.966-.004-.333.129-.466.454-.457.415.01.833-.022 1.245.011.324.027.403-.1.401-.391-.008-1.184-.003-2.369-.003-3.553 0-2.966 0-5.934.01-8.901 0-.286-.117-.364-.37-.36-.427.008-.855.005-1.283.004-.294 0-.451-.132-.45-.444.006-1.05.008-2.1 0-3.15-.001-.29.137-.386.405-.386 2.015.003 4.03.002 6.045-.001.29 0 .428.119.417.418-.011.338-.003.677-.003 1.01h-.003ZM10.2 17.24c2.024.063 3.244-1.58 3.29-3.19.056-1.92-1.474-3.437-3.221-3.44-1.79-.005-3.254 1.327-3.272 3.351-.017 1.948 1.538 3.355 3.204 3.279H10.2ZM39.646 21.83c-3.165-.05-5.451-1.127-7.091-3.37-.537-.733-.831-1.661-1.145-2.533a4.917 4.917 0 0 1-.29-1.708c.013-.963.107-1.92.436-2.852.439-1.236 1.119-2.295 2.085-3.163a7.837 7.837 0 0 1 2.705-1.605c1.022-.353 2.066-.588 3.125-.53 2.854.155 5.207 1.296 6.778 3.77.473.744.75 1.575.97 2.45.204.809.212 1.602.15 2.387a7.4 7.4 0 0 1-1.315 3.682c-.58.834-1.271 1.548-2.114 2.089a8.88 8.88 0 0 1-1.83.88c-.914.323-1.855.581-2.464.504v-.002Zm2.81-7.983a3.166 3.166 0 0 0-3.432-3.233 3.293 3.293 0 0 0-3.01 3.55c.09 1.574 1.322 3.14 3.378 3.09 1.687-.042 3.214-1.518 3.062-3.407h.001ZM99.965 21.816c-2.598.007-4.575-.78-6.193-2.348-.984-.954-1.741-2.103-1.983-3.503-.134-.773-.332-1.56-.289-2.328.048-.87.246-1.757.538-2.58.358-1.012.98-1.895 1.76-2.655.943-.92 2.048-1.58 3.3-1.936 1.149-.327 2.312-.5 3.547-.313.958.147 1.873.364 2.726.783 1.631.799 2.851 2.005 3.657 3.672.678 1.402.884 2.868.7 4.354-.214 1.733-.948 3.28-2.225 4.52a7.902 7.902 0 0 1-3.295 1.928c-.844.253-1.682.451-2.245.406h.002Zm2.878-7.875c.078-2.082-1.603-3.254-2.975-3.33-2.068-.116-3.373 1.582-3.477 3.023-.16 2.196 1.543 3.638 3.295 3.63 1.558-.006 3.283-1.367 3.157-3.322v-.001ZM74.245 13.944c.052 1.775-.528 3.346-1.575 4.72-1.014 1.333-2.353 2.237-3.982 2.746-1.044.325-2.086.42-3.157.388-1.146-.033-2.224-.365-3.236-.861-1.444-.71-2.59-1.771-3.366-3.193-.526-.964-.922-1.973-.873-3.109.03-.672-.059-1.355.016-2.02.113-1.01.517-1.934 1.05-2.802.905-1.48 2.2-2.502 3.797-3.114.666-.255 1.41-.296 2.095-.512.93-.293 1.864-.133 2.743.054.94.2 1.87.592 2.716 1.06a6.805 6.805 0 0 1 3.153 3.651c.182.482.346.98.45 1.482.103.494.117 1.007.172 1.511l-.003-.001Zm-8.132 3.294c1.685.127 3.258-1.443 3.216-3.31-.047-2.009-1.45-3.274-3.131-3.312-2.008-.045-3.266 1.507-3.364 3.136-.123 2.025 1.555 3.624 3.279 3.486ZM86.212 7.895c0-.406.003-.732 0-1.059-.003-.281.113-.432.412-.432 1.196.004 2.393.006 3.59 0 .287 0 .386.138.385.406-.005 1.88-.006 3.761-.002 5.64 0 .333-.128.484-.48.48a201.04 201.04 0 0 0-3.517-.004c-.301.002-.492-.089-.617-.394-.282-.695-.73-1.252-1.424-1.599-1.708-.857-3.818.018-4.406 1.842a3.926 3.926 0 0 0-.138 1.901c.155.871.608 1.644 1.4 2.139 1.715 1.071 3.77.434 4.58-1.423.066-.15.312-.31.478-.313 1.233-.024 2.465-.005 3.7-.014.316-.002.448.119.426.434-.066.98-.43 1.866-.909 2.702a6.699 6.699 0 0 1-3.18 2.859c-.928.407-1.896.753-2.927.727-.894-.022-1.815-.02-2.675-.228-1.242-.3-2.382-.869-3.335-1.779-.797-.76-1.464-1.606-1.87-2.627-.221-.555-.36-1.152-.476-1.74-.113-.578-.247-1.18-.2-1.757.117-1.47.399-2.925 1.305-4.139.555-.744 1.17-1.479 1.885-2.06.584-.473 1.34-.767 2.058-1.037.555-.208 1.176-.37 1.761-.349 1.413.053 2.606.164 4.173 1.82l.003.004ZM25.892 10.885v.617c0 1.917.003 3.834-.01 5.751-.001.29.116.362.366.358.574-.01 1.148 0 1.721-.02.355-.013.512.116.507.487-.014.977-.01 1.954-.004 2.932.003.417-.182.589-.6.589-2.773-.007-5.546-.003-8.317-.004-.594 0-.675-.087-.676-.68v-2.712c0-.567.022-.588.605-.59.392-.004.781-.008 1.173 0 .273.005.393-.096.391-.388a860.698 860.698 0 0 1 0-6.447c0-.295-.121-.392-.391-.389-.415.006-.831 0-1.246.005-.36.003-.54-.153-.538-.53.007-1 .009-2.003 0-3.004-.003-.336.154-.452.47-.45 1.991.004 3.981.006 5.972 0 .325 0 .476.123.451.457-.014.2-.003.405-.003.752.74-1.093 1.702-1.564 2.854-1.548.79.012 1.519.308 2.1.884 1.1 1.09 1.13 2.876.256 3.931-.418.506-.91.893-1.578 1.053-.631.15-1.273.189-1.854-.053-.577-.242-1.084-.647-1.653-1l.004-.001ZM114.912 9.044c0 2.733.003 5.468-.006 8.202 0 .281.11.368.366.363.403-.007.806.013 1.208-.004.371-.016.528.119.519.508-.019.928-.005 1.856-.006 2.784 0 .517-.098.616-.627.617-2.198.003-4.395 0-6.593.001h-1.354c-.361 0-.535-.167-.531-.539.009-.976.01-1.954.001-2.93-.003-.316.141-.442.442-.44.414.005.831-.017 1.244.005.378.019.513-.116.513-.506-.012-3.894-.004-7.789-.01-11.683-.003-1.243.196-1.115-1.136-1.12-1.129-.003-1.129 0-1.129-1.139 0-.77.008-1.539-.004-2.307-.006-.33.126-.458.454-.458 2.051.007 4.101.008 6.153 0 .377-.002.478.165.477.514-.009 2.71-.005 5.42-.005 8.13h.024v.002ZM49.555 14.552c0-1.246-.007-2.49.005-3.736.003-.312-.097-.446-.42-.43-.366.02-.734-.004-1.1.002-.28.006-.396-.123-.394-.399.004-1.063.005-2.124-.003-3.186-.003-.285.121-.4.394-.398.366.005.733-.013 1.1.006.32.016.427-.117.424-.43-.01-1.293.008-2.588-.01-3.882-.006-.4.138-.54.533-.533 1.221.016 2.442.004 3.663.006.543 0 .591.043.593.578.002 1.246.017 2.492-.008 3.737-.009.428.138.545.548.532.817-.028 1.636 0 2.454-.01.324-.005.464.11.46.448a113.887 113.887 0 0 0 0 3.003c.006.403-.18.538-.558.532-.83-.012-1.661.006-2.49-.006-.301-.004-.41.112-.41.41.008 2.013.008 4.029 0 6.042-.002.33.135.421.44.412.598-.016 1.196.006 1.794-.009.304-.007.459.096.459.414a725.426 725.426 0 0 0 0 3.553c0 .26-.125.38-.38.38-1.196-.002-2.399.07-3.586-.032-.827-.07-1.702-.18-2.369-.812-.49-.464-.892-1-.948-1.675-.125-1.5-.183-3.008-.27-4.511.028 0 .056-.003.084-.005l-.005-.001Z"></path>
          </g>
          <defs>
            <clipPath id="protocol-logo_svg__a">
              <path fill="#fff" d="M-.002.399H117v27.202H-.002z"></path>
            </clipPath>
          </defs>
        </svg>
      </a>
    </section>
  );
};

export default LandingBanner;
