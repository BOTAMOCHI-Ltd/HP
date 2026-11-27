import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/main/page";
import Home from "../pages/home/page";
import PrivacyPage from "../pages/privacy/page";
import SctaPage from "../pages/scta/page";
import RegisterPage from "../pages/register/page";
import ThanksPage from "../pages/thanks/page";
import InquiryPage from "../pages/inquiry/page";
import KityouPage from "../pages/kityou/page";
import KityouPricePage from "../pages/kityou/price/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/kityou",
    element: <KityouPage />,
  },
  {
    path: "/kityou/price",
    element: <KityouPricePage />,
  },
  {
    path: "/syataku",
    element: <Home />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPage />,
  },
  {
    path: "/scta",
    element: <SctaPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/thanks",
    element: <ThanksPage />,
  },
  {
    path: "/inquiry",
    element: <InquiryPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;