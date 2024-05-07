import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsUpdate = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold font-serif ml-24 mt-16">
        Team matches highlights
      </h1>
      <div className="w-[92%] mx-auto">
        <Slider {...settings}>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/rcb-vs-gt-highlights/3966232"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical-1714311211628.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/srh-vs-rcb-highlights/3959255"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1714068031266.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/kkr-vs-rcb-highlights/3955352"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1713709709725.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/mi-vs-rcb-highlights/3948656"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1712858356747.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/rr-vs-rcb-highlights/3944841"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/15-min_ipl_highlights_vertical_3x4-1712426016731.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/rcb-vs-lsg-highlights/3941048"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ipl_rcbvslsg_highlights_vertical-1712080302934.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="py-4">
            <a
              target="_blank"
              href="https://www.jiocinema.com/sports/cricket/rcb-vs-kkr-highlights/3937704"
            >
              <img
                className="w-[270px] h-[330px]"
                src="https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ipl_rcbvskkr_highlights_vertical-1711733397745.jpg"
                alt=""
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NewsUpdate;
