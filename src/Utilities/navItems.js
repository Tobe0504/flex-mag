import { v4 } from "uuid";

export const navItems = [
  {
    id: v4(),
    title: "HOME",
    isActive: false,
    route: "/home",
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
];
