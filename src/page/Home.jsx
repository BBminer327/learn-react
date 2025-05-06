import React from "react";
import Slider from "react-slick";
import Navbar from "../component/Navbar";
import Cards from "../component/Cards";

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
      <section className="w-full flex-1 bg-neutral-900 overflow-y-auto">
        <div className="py-6 px-12 bg-neutral-900">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`img-${i}`} className="w-full h-[300px]" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full h-full p-10 flex grid grid-cols-4 gap-4 justify-center">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </section>
    </div>
  );
}

export default Home;
