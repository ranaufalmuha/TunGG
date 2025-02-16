// @ts-ignore
import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MainLayout } from "./components/layout/MainLayout";

const router = createBrowserRouter([
  // home
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
