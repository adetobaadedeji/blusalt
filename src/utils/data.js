import {
  Alarm,
  Audit,
  Bulb,
  Dashboard,
  Kycs,
  Lang,
  Reports,
  Requests,
  Settings,
  User2,
  Users,
  Approved,
  GreenArrow,
  OrangeArrow,
  RedArrow,
  Pending,
  TotalAgents,
  TotalUsers,
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
    arrow: true,
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

export const notificationsIcons = [
  {
    icon: Lang,
    altText: "Language Icon",
  },
  {
    icon: Bulb,
    altText: "Bulb Icon",
  },
  {
    icon: Alarm,
    altText: "Notification Icon",
  },
  {
    icon: User2,
    altText: "User Profile",
  },
];

export const cards = [
  {
    Icon: Pending,
    background: "rgba(47, 73, 209, 0.1)",
    value: "1478 286",
    title: "Pending Requests",
    Arrow: GreenArrow,
    percent: "4.07%",
    time: "Last month",
    color: "#4BDE97",
  },
  {
    Icon: Approved,
    background: "rgba(255, 182, 72, 0.1)",
    value: "478 520",
    title: "Approved Requests",
    Arrow: GreenArrow,
    percent: "0.24%",
    time: "Last month",
    color: "#4BDE97",
  },
  {
    Icon: TotalAgents,
    background: "rgba(95, 46, 234, 0.1)",
    value: "154 872",
    title: "Total Agents",
    Arrow: RedArrow,
    percent: "1.64%",
    time: "Last month",
    color: "#F26464",
  },
  {
    Icon: TotalUsers,
    background: "rgba(75, 222, 151, 0.1)",
    value: "167",
    title: "Total Users",
    Arrow: OrangeArrow,
    percent: "0.00%",
    time: "Last month",
    iconColor: "#4BDE97",
    color: "#FFB648",
  },
];
