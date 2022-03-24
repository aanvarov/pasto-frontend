import { lazy } from "react";
import { BiCategory } from "react-icons/bi";

const SignUp = lazy(() => import("../views/Auth/SignUp"));
const SignIn = lazy(() => import("../views/Auth/SignIn"));
const Category = lazy(() => import("../views/Category"));

export const MAIN_ROUTES = [
  {
    path: "/restaurants/category",
    element: Category,
    icon: <BiCategory size={24} />,
    title: "Categories",
  },
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
