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
    title: "Home",
    isActive: false,
    route: "/home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },

  {
    id: v4(),
    title: "Fixtures",
    isActive: false,
    route: "/fixtures",
    icon: <FontAwesomeIcon icon={faCalendarWeek} />,
  },
  {
    id: v4(),
    title: "League Table",
    isActive: false,
    route: "/league-tables",
    icon: <FontAwesomeIcon icon={faRankingStar} />,
  },
];
