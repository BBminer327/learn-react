import React from "react";
import Slider from "react-slick";
import Navbar from "../component/Navbar";

function Home() {
  const images = [
    "/image/bg-01.jpg",
    "/image/bg-02.jpg",
    "/image/bg-03.jpg",
    "/image/Petch.png",
    "/image/yew.jfif",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="flex h-screen">
      <Navbar />
      <section className="flex-1 bg-neutral-900 overflow-y-auto">
        <div className="w-full py-6 px-12 bg-neutral-900 sticky top-0 z-10">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`img-${i}`} className="w-full h-[300px]" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full h-full p-10 flex">
          <div className="mx-5">
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

          <div className="mx-5">
            <section class="relative group  flex-col  w-full h-[100px]">
              <div class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px]">
                <div class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"></div>
                <div class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"></div>
                <div class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"></div>
                <div class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"></div>
                <div class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"></div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
