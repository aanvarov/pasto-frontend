import { lazy } from "react";
// import {
//   BiBookAlt,
//   BiGroup,
//   BiDumbbell,
//   BiCreditCardAlt,
//   BiCreditCard,
//   BiCog,
//   BiHourglass,
//   BiScan,
//   BiDesktop,
// } from "react-icons/bi";

const SignUp = lazy(() => import("../views/Auth/SignUp"));
const SignIn = lazy(() => import("../views/Auth/SignIn"));

export const MAIN_ROUTES = [
  // {
  //   allowedRoles: ["admin", "reception"],
  //   path: "/profile",
  //   element: Profile,
  //   icon: <BiCog size={24} />,
  //   title: "Profile",
  //   hidden: true,
  // },
];

export const AUTH_ROUTES = [
  {
    path: "/restaurants/sign-in",
    element: SignIn,
  },
  {
    path: "/restaurants/sign-up",
    element: SignUp,
  },
  {
    path: "*",
    element: SignIn,
  },
];
