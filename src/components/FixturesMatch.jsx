import React, { useEffect, useState } from "react";
import MyCard from "./MyCard";
import vs from "../assets/vs2.png";
import stadium from "../assets/stadium.png";
import backrcb from "../assets/back-rcb.jpg";


const FixturesMatch = () => {
  const matches = [
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 173,
      wickets1: 6,
      overs1: 20.0,
      team2: "Chennai Super Kings",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/CSK.png",
      runs2: 176,
      wickets2: 4,
      overs2: 18.4,
      result: "Chennai Super Kings won by 6 wickets",
      venue: "MA Chidambaram Stadium, Chennai",
      date: "Fri, 22 Mar 24"
    },
    {
      team1: "Punjab Kings",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/PBKS.png",
      runs1: 176,
      wickets1: 6,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 178,
      wickets2: 6,
      overs2: 19.2,
      result: "Royal Challengers Banglore won by 4 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Mon, 25 Mar 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 182,
      wickets1: 6,
      overs1: 20.0,
      team2: "Kolkata Knight Riders",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
      runs2: 186,
      wickets2: 3,
      overs2: 16.5,
      result: "Kolkata Knight Riders won by 7 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Fri, 29 Mar 24"
    },
    {
      team1: "Lucknow Super Giants",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/LSG.png",
      runs1: 181,
      wickets1: 5,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 153,
      wickets2: 10,
      overs2: 19.4,
      result: "Lucknow Super Giants won by 28 runs",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Tue, 02 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 183,
      wickets1: 3,
      overs1: 20.0,
      team2: "Rajasthan Royals",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RR.png",
      runs2: 189,
      wickets2: 4,
      overs2: 19.1,
      result: "Rajasthan Royals won by 6 wickets",
      venue: "Sawai Mansingh Stadium, Jaipur",
      date: "Sat, 06 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 196,
      wickets1: 8,
      overs1: 20.0,
      team2: "Mumbai Indians",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/MI.png",
      runs2: 199,
      wickets2: 3,
      overs2: 15.3,
      result: "Mumbai Indians won by 7 wickets",
      venue: "Wankhede Stadium, Mumbai",
      date: "Thu, 11 Apr 24"
    },
    {
      team1: "Kolkata Knight Riders",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
      runs1: 222,
      wickets1: 6,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 221,
      wickets2: 10,
      overs2: 20.0,
      result: "Kolkata Knight Riders won by 1 run",
      venue: "Eden Gardens, Kolkata",
      date: "Mon, 15 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 206,
      wickets1: 7,
      overs1: 20.0,
      team2: "Sunrisers Hyderabad",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/SRH.png",
      runs2: 171,
      wickets2: 8,
      overs2: 20.0,
      result: "Royal Challengers Banglore won by 35 runs",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      date: "Sun, 21 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 206,
      wickets1: 1,
      overs1: 16.0,
      team2: "Gujrat Titans",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
      runs2: 200,
      wickets2: 3,
      overs2: 20.0,
      result: "Royal Challengers Banglore won by 9 wickets",
      venue: "Narendra Modi Stadium, Ahmedabad",
      date: "Sun, 28 Apr 24"
    },
    {
      team1: "Gujrat Titans",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
      runs1: 147,
      wickets1: 10,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 152,
      wickets2: 6,
      overs2: 13.4,
      result: "Royal Challengers Banglore won by 4 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Sat, 04 May 24"
    },
  ];
  return (
    <div className="text-white bg-center bg-cover bg-[url('https://i.pinimg.com/736x/b9/fd/2b/b9fd2b741db0f7f435be4f04b1b576c7.jpg')]">
      <h1 className="text-3xl font-body font-semibold text-center py-4">
        Here RCB's Match Fixtures
      </h1>
      <div className="">
        {matches.map((d) => (
          <div className="w-[85%] hover:bg-red-600 flex py-4 items-center flex-col mx-auto font-body transition duration-300 ease-in cursor-pointer">
            <div className=" flex  items-center justify-around w-full">
              <div>
                <h3>{d.date}</h3>
                <h2>Time:</h2>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  <h1 className="text-2xl font-semibold w-80 text-center">
                    {d.team1}
                  </h1>
                  <img
                    className="w-16"
                    src={d.img1}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold">{d.runs1}/{d.wickets1} <span className="text-sm ">({d.overs1})</span></h2>
                </div>
                <div>
                  <img className="w-12" src={vs} alt="" />
                </div>
                <div className="flex items-center gap-1">
                  <h2 className="text-2xl font-bold ">{d.runs2}/{d.wickets2} <span className="text-sm ">({d.overs2})</span></h2>
                  <img
                    className="w-16"
                    src={d.img2}
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold w-80 text-center">
                    {d.team2}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <img className="w-8 invert-[100%]" src={stadium} alt="" />
                <h2>{d.venue}</h2>
              </div>
            </div>
            <div>
              <h2>{d.result}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixturesMatch;
