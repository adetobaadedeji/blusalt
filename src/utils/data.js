import { 
  Audit,
  Dashboard,
  Kycs,
  Reports,
  Requests,
  Settings,
  Users,
} from "../assets";

export const sidebarData = [
  {
    icon: Dashboard,
    title: "Dashboard",
  },
  {
    icon: Requests,
    title: "Requests",
  },
  {
    icon: Kycs,
    title: "KYCs",
  },
  {
    icon: Reports,
    title: "Reports",
  },
  {
    icon: Audit,
    title: "Audit Trail",
    arrow: true
  },
  {
    icon: Users,
    title: "Users",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];
