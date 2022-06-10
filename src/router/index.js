import { lazy } from "react";
import { BiCategory } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CategoryIcon } from "../utils/Images";
import { FoodsIcon } from "../utils/Images";
import { OrderListIcon } from "../utils/Images";
import { DashboardIcon } from "../utils/Images";

const OrderList = lazy(() => import("../views/OrderList"));
const OrderDetails = lazy(() => import("../components/Order/OrderDetails"));
const SignUp = lazy(() => import("../views/Auth/SignUp"));
const SignIn = lazy(() => import("../views/Auth/SignIn"));
const Category = lazy(() => import("../views/Category"));
const Foods = lazy(() => import("../views/Foods"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const Profile = lazy(() => import("../views/Profile"));

export const MAIN_ROUTES = [
  {
    path: "/restaurants",
    element: Dashboard,
    icon: <DashboardIcon size={24} />,
    title: "Dashboard",
  },
  {
    path: "/restaurants/foods",
    element: Foods,
    icon: <FoodsIcon size={24} />,
    title: "Foods",
  },
  {
    path: "/restaurants/category",
    element: Category,
    icon: <CategoryIcon size={24} />,
    title: "Categories",
  },
  {
    path: "/restaurants/orders",
    element: OrderList,
    icon: <OrderListIcon size={24} />,
    title: "Orders",
  },
  {
    path: "/restaurants/orderdetails",
    element: OrderDetails,
  },
  {
    path: "/restaurants/profile",
    element: Profile,
    icon: <OrderListIcon size={24} />,
    title: "Orders",
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
