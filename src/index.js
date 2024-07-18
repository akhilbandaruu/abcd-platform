import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/body/Body";
import Projects from "./components/pages/Projects";
import Files from "./components/pages/Files";
import Messages from "./components/pages/Messages";
import Payments from "./components/pages/Payments";
import Reports from "./components/pages/Reports";
import TicketSystem from "./components/pages/TicketSystem";
import Settings from "./components/pages/Settings";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PrivateRoute from "./components/body/private-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={App} />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/support-ticket",
        element: <TicketSystem />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/user-profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
