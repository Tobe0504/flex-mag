import {
  faCalendarWeek,
  faHome,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 } from "uuid";

export const navItems = [
  {
    id: v4(),
    title: "HOME",
    isActive: false,
    route: "/home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },

  {
    id: v4(),
    title: "FIXTURES",
    isActive: false,
    route: "/fixtures",
    icon: <FontAwesomeIcon icon={faCalendarWeek} />,
  },
  {
    id: v4(),
    title: "LEAUGE TABLE",
    isActive: false,
    route: "/league-tables",
    icon: <FontAwesomeIcon icon={faRankingStar} />,
  },
];
