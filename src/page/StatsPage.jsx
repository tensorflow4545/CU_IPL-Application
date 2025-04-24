"use clients";
import { useState } from "react";
import { Award, Zap } from "lucide-react";

export default function StatsPage() {
  const [activeTab, setActiveTab] = useState("batting");

  const battingStats = [
    {
      rank: 1,
      player: "Virat Kohli",
      team: "RCB",
      matches: 8,
      runs: 380,
      avg: 63.33,
      sr: 155.1,
      fifties: 4,
      hundreds: 1,
    },
    {
      rank: 2,
      player: "KL Rahul",
      team: "LSG",
      matches: 8,
      runs: 356,
      avg: 59.33,
      sr: 142.4,
      fifties: 3,
      hundreds: 1,
    },
    {
      rank: 3,
      player: "Shubman Gill",
      team: "GT",
      matches: 8,
      runs: 344,
      avg: 49.14,
      sr: 138.71,
      fifties: 3,
      hundreds: 0,
    },
    {
      rank: 4,
      player: "Jos Buttler",
      team: "RR",
      matches: 7,
      runs: 311,
      avg: 51.83,
      sr: 150.97,
      fifties: 2,
      hundreds: 1,
    },
    {
      rank: 5,
      player: "Suryakumar Yadav",
      team: "MI",
      matches: 8,
      runs: 298,
      avg: 42.57,
      sr: 170.29,
      fifties: 3,
      hundreds: 0,
    },
  ];

  const bowlingStats = [
    {
      rank: 1,
      player: "Jasprit Bumrah",
      team: "MI",
      matches: 8,
      wickets: 15,
      economy: 6.78,
      avg: 14.2,
      sr: 12.53,
      best: "4/20",
    },
    {
      rank: 2,
      player: "Yuzvendra Chahal",
      team: "RR",
      matches: 8,
      wickets: 14,
      economy: 7.93,
      avg: 17.07,
      sr: 12.93,
      best: "4/17",
    },
    {
      rank: 3,
      player: "T Natarajan",
      team: "SRH",
      matches: 8,
      wickets: 13,
      economy: 8.65,
      avg: 20.0,
      sr: 13.85,
      best: "3/10",
    },
    {
      rank: 4,
      player: "Rashid Khan",
      team: "GT",
      matches: 8,
      wickets: 12,
      economy: 6.95,
      avg: 17.42,
      sr: 15.0,
      best: "3/14",
    },
    {
      rank: 5,
      player: "Mohammed Siraj",
      team: "RCB",
      matches: 8,
      wickets: 11,
      economy: 7.82,
      avg: 21.36,
      sr: 16.36,
      best: "3/22",
    },
  ];

  return (
    <div className="py-8 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">IPL 2025 Statistics</h1>
          <p className="text-gray-600">Comprehensive stats of all players</p>
        </div>

        {/* Button */}
        <div className="bg-white rounded-sm shadow overflow-hidden mb-8">
          <div className="grid grid-cols-2 divide-x-2 divide-y-2 border-b">
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "batting"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("batting")}
            >
              <Award className="w-4 h-4 mr-2" /> Batting
            </button>
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "bowling"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("bowling")}
            >
              <Zap className="w-4 h-4 mr-2" /> Bowling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
