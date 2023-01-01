import { v4 } from "uuid";

export const liveMatches = [
  {
    id: v4(),
    title: "World Cup-Group A",
    matches: [
      {
        id: v4(),
        matchTime: "12:30",
        home: "RUS",
        away: "EGY",
        homeScore: "0",
        awayScore: "0",
        date: "Aug 23",
        liveMatchTime: "11",
      },
    ],
  },
  {
    id: v4(),
    title: "International - Club Friendlies",
    matches: [
      {
        id: v4(),
        matchTime: "12:30",
        home: "ACH",
        away: "IFK",
        homeScore: "4",
        awayScore: "1",
        date: "Aug 23",
        liveMatchTime: "11",
      },
      {
        id: v4(),
        matchTime: "12:30",
        home: "KFF",
        away: "ACH",
        homeScore: "0",
        awayScore: "0",
        date: "Aug 23",
        liveMatchTime: "Posp.",
      },
    ],
  },
  {
    id: v4(),
    title: "Spain - La Liga",
    matches: [
      {
        id: v4(),
        matchTime: "12:30",
        home: "RMD",
        away: "BFC",
        homeScore: "6",
        awayScore: "1",
        date: "Aug 23",
        liveMatchTime: "FT",
      },
    ],
  },
  {
    id: v4(),
    title: "Sweededn - Superettan",
    matches: [
      {
        id: v4(),
        matchTime: "12:30",
        home: "ACH",
        away: "IFK",
        homeScore: "4",
        awayScore: "1",
        date: "Aug 23",
        liveMatchTime: "11",
      },
      {
        id: v4(),
        matchTime: "12:30",
        home: "KFF",
        away: "ACH",
        homeScore: "0",
        awayScore: "0",
        date: "Aug 23",
        liveMatchTime: "Posp.",
      },
      {
        id: v4(),
        matchTime: "12:30",
        home: "KFF",
        away: "ACH",
        homeScore: "0",
        awayScore: "0",
        date: "Aug 23",
        liveMatchTime: "FT",
      },
    ],
  },
];
