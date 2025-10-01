import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/Home/page";
//import AboutPage from "../pages/About/page";
import ContactPage from "../pages/Contact/page";
import EventsPage from "../pages/Events/page";
import Layout from "../pages/layout";
import NotFound from "../pages/NotFound";
import EventDetailPage from "../pages/EventsDetailPage/page";
import ProjectsPage from "../pages/Projects/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
