import { v4 } from "uuid";

export const navItems = [
  {
    id: v4(),
    title: "HOME",
    isActive: false,
    route: "/",
  },
  {
    id: v4(),
    title: "NEWS",
    isActive: false,
    route: "/news",
  },
  {
    id: v4(),
    title: "FIXTURES",
    isActive: false,
    route: "/fixtures",
  },
  {
    id: v4(),
    title: "LEAUGE TABLE",
    isActive: false,
    route: "/league-table",
  },
  {
    id: v4(),
    title: "SOCCER",
    isActive: false,
    route: "/soccer",
  },
  {
    id: v4(),
    title: "NBA",
    isActive: false,
    route: "/nba",
  },
  {
    id: v4(),
    title: "SHOP",
    isActive: false,
    route: "/shop",
  },
];
