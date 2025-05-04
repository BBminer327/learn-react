import React from "react";

function Cards() {
  return (
    <>
      <div className="flex justify-center">
        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="p-6">
            <img src="/image/rat.png" alt="rat" />
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
