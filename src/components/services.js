import { IoFastFoodSharp as FastFood } from "react-icons/io5";
import {
  MdDirectionsRun as Healthy,
  MdRestaurant as Restaurant,
  MdLocalMovies as Leisure,
} from "react-icons/md";
import {
  GiSoap as Soap,
  GiWallet as Wallet,
  GiShoppingBag as Bag,
} from "react-icons/gi";
import { FaBusAlt as Bus, FaGift as Gift } from "react-icons/fa";

export const getDate = () => {
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateString = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return dateString;
};

export const expenses = [
  {
    title: "Food & Drinks",
    image: <FastFood />,
    link: "/expenses/food",
  },
  {
    title: "Health",
    image: <Healthy />,
    link: "/expenses/health",
  },
  {
    title: "Hygiene",
    image: <Soap />,
    link: "/expenses/hygiene",
  },
  {
    title: "Bills",
    image: <Wallet />,
    link: "/expenses/bills",
  },
  {
    title: "Shopping",
    image: <Bag />,
    link: "/expenses/shopping",
  },
  {
    title: "Transport",
    image: <Bus />,
    link: "/expenses/transport",
  },
  {
    title: "Gifts",
    image: <Gift />,
    link: "/expenses/gifts",
  },
  {
    title: "Restaurant",
    image: <Restaurant />,
    link: "/expenses/restaurant",
  },
  {
    title: "Leisure",
    image: <Leisure />,
    link: "/expenses/leisure",
  },
];

export const languages = ["English", "Russian", "Turkmen"];

export const currencies = [
  {
    title: "Dollar - $",
    value: "$",
  },
  {
    title: "Euro - \u20AC",
    value: "\u20AC",
  },
  {
    title: "Pound - \xa3",
    value: "\xa3",
  },
  {
    title: "Ruble - \u20BD",
    value: "\u20BD",
  },
  {
    title: "Indian Rupee - \u20B9",
    value: "\u20B9",
  },
  {
    title: "Chinese Yuan - \u5143",
    value: "\u5143",
  },
];
