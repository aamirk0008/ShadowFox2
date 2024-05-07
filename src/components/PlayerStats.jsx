import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlayerStats = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1500,
    width: "1100px",
    height: "300px"
  };
  const data = [
    {
      name: "Virat Kohli",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/vk%20%281%29_0_24_11zon.png",
      runs: 500,
      century: 51,
      fifty: 80,
      strike: 147.49,
    },
    {
      name: "Faf du plesis",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/faf.png",
      runs: 288,
      century: 51,
      fifty: 80,
      strike: 159.12,
    },
    {
      name: "Dinesh karthik",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/dk_0.png",
      runs: 262,
      century: 51,
      fifty: 80,
      strike: 195.52,
    },
    {
      name: "Rajat Patidar",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/rajat.png",
      runs: 211,
      century: 51,
      fifty: 80,
      strike: 175.83,
    },
    {
      name: "Will Jacks",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/jacks_0.png",
      runs: 176,
      century: 51,
      fifty: 80,
      strike: 191.3,
    },
    {
      name: "Cameron Greens",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/green%20_0.png",
      runs: 111,
      century: 51,
      fifty: 80,
      strike: 195.52,
    },
    {
      name: "Glenn Maxwell",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/max_0.png",
      runs: 32,
      century: 51,
      fifty: 80,
      strike: 94.12,
    },
    {
      name: "Mohammed Siraj",
      img: "https://www.royalchallengers.com/PRRCB01/public/2024-03/siraj_0.png",
      runs: 46,
      best: 4,
      fifty: 80,
      strike: 156.25,
    },
  ];
  return (
    <div className="w-full h-full text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-body font-bold">Here's Our Bold Army</h1>
        <div className="w-[1250px]">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="flex flex-col">
                <div>
                <img className="w-[85%]" src={d.img} alt="" />

                </div>
                <div className="pl-20">
                  <h1 className="text-xl font-bold font-body">{d.name}</h1>
                  <h1 className="text-xl font-body">Runs: {d.runs}</h1>
                  <p className="text-xl font-body">S/R: {d.strike}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
