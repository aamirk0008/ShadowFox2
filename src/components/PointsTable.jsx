import React from 'react'

const PointsTable = () => {
    const teams = [
        {
            team: "Kolkata Knight riders",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
            played: 11,
            won: 8,
            lost: 3,
            points: 16 
        },
        {
            team: "Rajasthan Royals",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RR.png",
            played: 10,
            won: 8,
            lost: 2,
            points: 16 
        },
        {
            team: "Chennai Super Kings",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/CSK.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12 
        },
        {
            team: "Sunrisers Hyderabad",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/SRH.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12

 
        },
        {
            team: "Lucknow Super Giants",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/LSG.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12 
        },
        {
            team: "Delhi Capitals",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/DC.png",
            played: 11,
            won: 5,
            lost: 6,
            points: 10
        },
        {
            team: "Royal Challengers Bengaluru",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
        {
            team: "Punjab Kings",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/PBKS.png",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
        {
            team: "Mumbai Indians",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/MI.png",
            played: 12,
            won: 4,
            lost: 8,
            points: 8
        },
        {
            team: "Gujarat Titans",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
    ]
  return (
    <div className='w-full h-full text-white flex flex-col'>
        <div>
            <h1 className='text-center py-4 text-3xl font-bold font-serif'>IPL'24 Points Table</h1>
        </div>
        <div>
            <table className='w-[80%] mx-auto font-body text-2xl'>
                <thead>
                    <tr>
                        <th className='w-[40%]'>Teams</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((d) =>(
                        <tr className='hover:bg-red-700 cursor-pointer transition duration-300'>
                           <td className='px-2 py-2 font-semibold flex items-center gap-1'><img className='w-16' src={d.img} alt="" />{d.team}</td> 
                           <td>{d.played}</td> 
                           <td>{d.won}</td> 
                           <td>{d.lost}</td> 
                           <td>{d.points}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PointsTable