import { createBrowserRouter } from "react-router";
import MainLayout from "../components/templates/main-layout/MainLayout";

export const mainRoute = createBrowserRouter([
  {
    path: '/',
    lazy: () => import("../pages/landing-page").then(module => ({ Component: module.default })),
  },
  {
    path: '/login',
    lazy: () => import("../pages/login").then(module => ({ Component: module.default })),
  },
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/dashboard',
        lazy: () => import("../pages/dashboard").then(module => ({ Component: module.default })),
      },
      {
        path: '/resume-builder/:resumeId',
        lazy: () => import("../pages/resume-builder").then(module => ({ Component: module.default })),
      },
       {
        path: '/resume-share/:resumeId',
        lazy: () => import("../pages/resume-share").then(module => ({ Component: module.default })),
      }
    ]
  },
 
])