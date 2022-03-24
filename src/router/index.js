import { lazy } from "react";
import { BiCategory } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

const SignUp = lazy(() => import("../views/Auth/SignUp"));
const SignIn = lazy(() => import("../views/Auth/SignIn"));
const Category = lazy(() => import("../views/Category"));
const Foods = lazy(() => import("../views/Foods"));

export const MAIN_ROUTES = [
  {
    path: "/restaurants/foods",
    element: Foods,
    icon: <IoFastFoodOutline size={24} />,
    title: "Foods",
  },
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
